const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/signup',
        createProxyMiddleware({
            target: 'https://team3back.sku-sku.com',
            changeOrigin: true,
        })
    );
};