const request = require('request');

    breedType = process.argv[2];

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedType}`, (error, res, body) => {

        if (error) {
            console.log("Error, can't open url", error);
        }
        const data = JSON.parse(body);
        // console.log(data);
        // console.log(typeof data);
        let breed = data[0];

        if (breed) {
            console.log(breed.description);
        } else {
            console.log(`Error, cannot find breed ${breedType}`);
        }
      
    });