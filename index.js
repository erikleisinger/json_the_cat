const breedName = process.argv[2];
const getKitty = require('./breedFetcher');

getKitty(breedName, (error, description) => {
  if (error === 'ERROR') {
    console.log(`"${breedName}" is not a type of cat I recognize. Please try again`);
  } else {
    console.log(description);
    let desc = JSON.parse(description);
    console.log(desc[0].description);
  }
});



