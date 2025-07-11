export default async function handler(req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  res.setHeader('Content-Security-Policy', 'frame-ancestors *');
  
  // 处理OPTIONS预检请求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  try {
    // 简单的重定向页面
    const redirectHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>正在跳转...</title>
        <style>
            body { 
                margin: 0; 
                padding: 20px; 
                font-family: Arial, sans-serif; 
                background: #1a1a1a; 
                color: white; 
                text-align: center; 
            }
            .container { 
                max-width: 600px; 
                margin: 50px auto; 
                padding: 20px; 
                background: rgba(255,255,255,0.1); 
                border-radius: 10px; 
            }
            .btn { 
                display: inline-block; 
                padding: 12px 24px; 
                margin: 10px; 
                background: #3498db; 
                color: white; 
                text-decoration: none; 
                border-radius: 5px; 
                border: none; 
                cursor: pointer; 
                font-size: 16px; 
            }
            .btn:hover { 
                background: #2980b9; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🎮 HaiSnap 植物大战僵尸</h1>
            <p>由于浏览器安全策略限制，请选择以下方式访问游戏：</p>
            
            <div>
                <a href="http://39.105.175.89/" target="_blank" class="btn">
                    🚀 直接访问游戏
                </a>
            </div>
            
            <div>
                <button onclick="openInNewWindow()" class="btn">
                    🪟 新窗口打开
                </button>
            </div>
            
            <div>
                <button onclick="showEmbedCode()" class="btn">
                    📋 获取嵌入代码
                </button>
            </div>
            
            <div id="embedCode" style="display:none; margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.3); border-radius: 5px;">
                <p>复制以下代码到支持HTTP内容的环境中：</p>
                <textarea style="width: 100%; height: 80px; padding: 10px; background: #333; color: white; border: none; border-radius: 5px;" readonly>
&lt;iframe src="http://39.105.175.89/" width="800" height="600" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;</textarea>
            </div>
            
            <div style="margin-top: 20px; font-size: 14px; opacity: 0.8;">
                <p>💡 提示：如果您使用的是在线开发环境，请确保它支持HTTP内容加载</p>
            </div>
        </div>
        
        <script>
            function openInNewWindow() {
                window.open('http://39.105.175.89/', '_blank', 'width=800,height=600');
            }
            
            function showEmbedCode() {
                const embedDiv = document.getElementById('embedCode');
                embedDiv.style.display = embedDiv.style.display === 'none' ? 'block' : 'none';
            }
        </script>
    </body>
    </html>
    `;
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(redirectHtml);
    
  } catch (error) {
    console.error('代理错误:', error);
    res.status(500).json({ 
      error: '代理服务器错误', 
      message: error.message 
    });
  }
} 