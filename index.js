const breedName = process.argv[2];
const getKitty = require('./breedFetcher');

getKitty(breedName, (error, description) => {
  if (error) {
    console.log(`"${breedName}" is not a type of cat I recognize. Please try again`);
  } else {
    let obj = JSON.parse(description);
    console.log(obj[0].description);
  }
});



