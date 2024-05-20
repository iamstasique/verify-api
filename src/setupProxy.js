const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.veryfi.com/api/v8/partner/',
      changeOrigin: true,
    })
  );
};