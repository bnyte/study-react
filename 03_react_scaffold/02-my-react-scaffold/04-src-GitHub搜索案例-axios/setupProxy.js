const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api', { // 遇见以当前指定的`/api1`的请求则标识为走代理
            target: "http://localhost:5000", // 请求转发的目标地址
            changeOrigin: true, // 控制服务器收到的请求头中Host字段值
            pathRewrite: {"^/api": ""} // 重写请求路径
        })
    )
}