# Vercel 部署方案

## 🚀 快速部署指南

### 方法1：自动部署（推荐）
1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择 "Import Git Repository"
5. 将此文件夹内容上传到GitHub仓库
6. 在Vercel中导入该仓库
7. 点击 "Deploy"

### 方法2：拖拽部署
1. 访问 [Vercel](https://vercel.com)
2. 直接将此文件夹拖拽到Vercel页面
3. 自动部署完成

## 📁 文件说明

- `index.html` - 主页面，包含游戏iframe
- `vercel.json` - Vercel配置文件
- `README.md` - 说明文档

## 🔧 部署配置

`vercel.json` 文件包含以下配置：
- 静态文件托管设置
- CORS头部配置
- iframe嵌入支持

## 🌐 部署后使用

部署完成后，您会得到一个域名，例如：
```
https://pvz-game-proxy.vercel.app
```

这个域名可以：
1. 直接在浏览器中访问
2. 嵌入到其他网站
3. 在线前端开发工具中使用

## 📋 嵌入代码

```html
<iframe 
    src="https://your-project.vercel.app" 
    width="800" 
    height="600" 
    frameborder="0" 
    allowfullscreen>
</iframe>
```

## ✅ 优势

- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 自动部署
- ✅ 支持自定义域名

## 🔄 更新部署

如果需要更新：
1. 修改文件内容
2. 推送到GitHub仓库
3. Vercel自动重新部署

## 📞 技术支持

如果遇到问题：
1. 检查 `vercel.json` 配置
2. 确认源IP地址可访问
3. 查看Vercel部署日志

## 🎮 游戏说明

此代理页面连接到植物大战僵尸游戏服务器：
- 服务器地址：`http://39.105.175.89/`
- 支持全屏模式
- 自动加载检测
- 移动端优化 