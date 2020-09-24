const request = require('request');

const getKitty = function(key, callback) {
  let str = `https://api.thecatapi.com/v1/breeds/search?q=${key}`;
  request(str, (error, response, body) => {
    if (body === '[]') {
      error = 'ERROR';
    }
    let desc = JSON.parse(body);
    
      return callback(error, desc[0].description);
    });
  };

module.exports = getKitty;