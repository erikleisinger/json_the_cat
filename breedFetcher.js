const request = require('request');

const getKitty = function(key, callback) {
  let str = `https://api.thecatapi.com/v1/breeds/search?q=${key}`;
  request(str, (error, response, body) => {
    if (body === '[]') {
      return callback('ERROR');
    } else {
      return callback(error, body);
    }
  });
  
};

module.exports = getKitty;