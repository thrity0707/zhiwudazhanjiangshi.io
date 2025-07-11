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
    // 构建目标URL
    const targetUrl = 'http://39.105.175.89' + (req.url.replace('/api/proxy', '') || '/');
    
    // 发起请求
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (compatible; Vercel-Proxy)',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      },
    });
    
    // 获取响应内容
    const content = await response.text();
    
    // 设置响应头
    res.setHeader('Content-Type', response.headers.get('content-type') || 'text/html');
    res.setHeader('Cache-Control', 'no-cache');
    
    // 如果是HTML内容，修改其中的相对路径
    if (response.headers.get('content-type')?.includes('text/html')) {
      const modifiedContent = content
        .replace(/src="(?!http)/g, 'src="' + targetUrl.replace(/\/$/, '') + '/')
        .replace(/href="(?!http)/g, 'href="' + targetUrl.replace(/\/$/, '') + '/')
        .replace(/url\("(?!http)/g, 'url("' + targetUrl.replace(/\/$/, '') + '/');
      
      res.status(200).send(modifiedContent);
    } else {
      // 对于非HTML内容，直接返回
      res.status(200).send(content);
    }
    
  } catch (error) {
    console.error('代理错误:', error);
    res.status(500).json({ 
      error: '代理服务器错误', 
      message: error.message 
    });
  }
} 