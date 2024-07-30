const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/signup',
        createProxyMiddleware({
            target: 'http://52.78.131.56:8080',
            changeOrigin: true,
        })
    );
};