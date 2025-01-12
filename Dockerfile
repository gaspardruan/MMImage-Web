# Make the vite + nginx a docker iamge
# Usage: docker build -t vite-nginx .
# Usage: docker run -d -p 8080:80 --name vite-nginx vite-nginx

# Step 1: Build the Vite app
FROM node:22-alpine As builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve the Vite app with Nginx
FROM nginx:stable-alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
