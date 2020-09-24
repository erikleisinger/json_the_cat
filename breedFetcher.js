const request = require('request');
const args = process.argv;



const getKitty = function(key) {
  let str = `https://api.thecatapi.com/v1/breeds/search?q=${key}`;
  request(str, (error, response, body) => {
    if (body === '[]') {
      console.log(`"${key}" is not a type of cat I recognize. Please try again`);
    } else {
      let bodyObj = JSON.parse(body);
      let kittyUrl = bodyObj[0].description;
      console.log(kittyUrl);
    }
  });
};

getKitty(args[2]);