[**中文**](https://github.com/gaspardruan/MMImage-Web) | [**English**](https://github.com/gaspardruan/MMImage-Web/blob/main/README-EN.md)

# MMImage 网页版

![mmimage-web](https://github.com/user-attachments/assets/f345e115-5fca-4ebd-b883-f8eb91407dbc)


这是 [MMImage](https://github.com/gaspardruan/MMImage) 的网页版。这是一个用来看 MM 图片的小工具，和一般的 vite 项目一样，可以在 Netlify、Vercel 或私有服务器（如腾讯云和阿里云）上部署。在中国，推荐使用 [Netlify](https://www.netlify.com)。

## 开始

### 解决方案 1：使用 Netlify

**你必须拥有一个域名。** 图片资源使用 http 访问，但 Netlify 自动使用 https。因此，你需要使用一个自定义域名，以便可以使用 http。

1. 将此项目 fork 到你的 GitHub 账户。
2. 转到 [Netlify](https://www.netlify.com) 并注册。
3. 点击“New site from Git”，然后选择 fork 的项目。

或者

1. 下载已经构建的版本 [dist.zip](https://github.com/gaspardruan/MMImage-Web/releases)
2. 转到 [Netlify](https://www.netlify.com) 并注册。
3. 使用“Netlify Drop”拖放已经解压的文件夹“dist”。

然后，你需要使用自己的域名来替换 Netlify 自动生成的 URL，这个过程很简单，只需要在域名 DNS 解析中添加一条记录，让你的域名重定向到 Netlify 提供的域名，并使用 http 访问网站。例如，如果你的域名是 `example.com`，你可以使用 `http://example.com` 访问网站。

### 解决方案 2：使用私有服务器

1. 确保你已安装 Docker。
2. 运行以下命令启动服务器：

```bash
git clone
cd MMImage-Web
docker build -t mmimage .
docker run -d --name mmimage-web -p 1314:80 mmimage
```

你可以根据需要自定义端口 1314。然后，你可以使用 `http://your-server-ip:1314` 访问网站。

**注意：确保你的服务器上暴露了 1314 端口，在腾讯云和阿里云中一般在服务器的防火墙设置页面。**

## 更多

我使用 Gist（它是免费的）存储图片 URL。第一次加载网站根据你的位置不同，大约需要 10s-5min。之后就很快了。
