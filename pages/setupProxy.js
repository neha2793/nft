const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 
  
  app.use(
    createProxyMiddleware('/api/advisor-get-profile-data', {
      target: 'https://staging.candoor.io/',
      changeOrigin: true,
    })
  );

  
  
  
  
};