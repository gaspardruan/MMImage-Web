# Make the vite + nginx a docker iamge
# docker build -t mmimage .
# docker run -d --name mmimage-web -p 1314:80 mmimage

# Step 1: Build the Vite app
FROM node:22-alpine As builder
WORKDIR /app
COPY . .
# If you are in China, you can use the following command to speed up the download
# RUN npm config set registry https://mirrors.cloud.tencent.com/npm/
RUN npm install
RUN npm run build

# Step 2: Serve the Vite app with Nginx
FROM nginx:stable-alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
