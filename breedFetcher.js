

const request = require('request');
const breedName = (name, call) => {

    request((`https://api.thecatapi.com/v1/breeds/search?q${name}`), (err, res, body) => {

        if (err) {
            return call(err);
        } else {
            const data = JSON.parse(body);
            if (data.length === 0) {
                return call('Failed');
            }
        }

    });
};

console.log(breedName('siberian'));


















