[**中文**](https://github.com/gaspardruan/MMImage-Web) | [**English**](https://github.com/gaspardruan/MMImage-Web/blob/main/README-EN.md)

# MMImage Web Version

![mmimage-web](https://github.com/user-attachments/assets/f345e115-5fca-4ebd-b883-f8eb91407dbc)

This is the web version of the [MMImage](https://github.com/gaspardruan/MMImage) project. The project is a web application that allows users to view beauty images. It's a normal vite project and can be built and deployed on Netlify, Vercel or your private server. In China, [Netlify](https://www.netlify.com) is recommended in 2025.

## Get Started

### Solution 1: Use Netlify

**You must have a domain.** The image sources are accessed using http, but Netlify automatically uses https. So you need to use your domain so that the http can be used.

1. Fork this project to your GitHub account.
2. Go to [Netlify](https://www.netlify.com) and sign up.
3. Click "New site from Git" and select the forked project.

or

1. Download the release [dist.zip](https://github.com/gaspardruan/MMImage-Web/releases)
2. Go to [Netlify](https://www.netlify.com) and sign up.
3. Use the "Netlify Drop" to drag and drop the unzipped folder ""dist"".

Then you need to custom the domain using the domain you have. And use http to access the website. For example, if your domain is `example.com`, you can access the website using `http://example.com`.

### Solution 2: Use Private Server

1. Ensure you have Docker installed.
2. Run the following command to start the server:

```bash
git clone https://github.com/gaspardruan/MMImage-Web.git
cd MMImage-Web
docker build -t mmimage .
docker run -d --name mmimage-web -p 1314:80 mmimage
```

You can custom the port 1314 as you like. Then you can access the website using `http://your-server-ip:1314`.

**Notice: Ensure the 1314 port is exposed on your server.**

## More

- I use Gist(it's free) to store the image urls. It will take about 10s-5m to load the images for the first time. Then it will be faster.

- The app doesn't have back buttons. You can use the browser's back button or the phone's back gesture (usually swipe from the left side of the screen to the right).
