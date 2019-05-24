// http
const http = require('http');

http.createServer((req, res) =>{
    // 自己的服务器
    if(req.url == '/favicon.ico') return
    // 把url解析成应该对象
    const reqObj = qs.parse(reqObj.query);
    console.log('正在请求', req.url);
    res.end('hello node');
}).listen(3000, () => {
    console.log('服务正在 3000 端口运行')
})