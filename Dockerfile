FROM node:18 AS build

WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制前端源代码
COPY . .

# 构建前端项目
RUN npm run build

# 使用轻量级 nginx 镜像来部署静态资源
FROM nginx:alpine

# 复制构建好的文件到 nginx 默认路径
COPY --from=build /app/dist /usr/share/nginx/html

# 复制自定义 nginx 配置（可选）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]