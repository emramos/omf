
const proxy = require('http-proxy-middleware');


var apiProxy = proxy('/api/*', {
  target: 'http://localhost:8523',
  "secure": false,
  verbose: true,
  "logLevel": "debug",
});

module.exports = {
  "port": 8123,
  "logLevel": "debug",
  "server": {
    "baseDir":  "./frontend",
    "routes" : { "/node_modules" : "./node_modules"},
    middleware: {
       10: apiProxy
    }
  }
};
