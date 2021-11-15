const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, res, body) => {

        if (error) {
            callback("Error, can't open url", error);
        }
        const data = JSON.parse(body);
        // console.log(data);
        // console.log(typeof data);
        let breed = data[0];

        if (breed) {
            callback(null, breed.description);
        } else {
            callback(`Error, cannot find breed ${breedName}`, null);
        }
      
    });
};

module.exports = { fetchBreedDescription };