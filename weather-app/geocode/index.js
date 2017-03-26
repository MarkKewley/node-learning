const request = require('request');
const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/geocode/json';

const geocodeAddress = (address, callback) => {
    const addressValue = encodeURIComponent(address);
    request({
        url: `${GOOGLE_MAPS_API}?address=${addressValue}`,
        json: true
    }, (error, response, body) => {
        if (!error) {
            if (body && body.status === 'OK') {
                const result = body.results[0];
                callback(undefined, {
                    address: result.formatted_address,
                    latitude: result.geometry.location.lat,
                    longitude: result.geometry.location.lng
                })
            } else if (body && body.status === 'ZERO_RESULTS') {
                callback('No Results Found');
            } else {
                callback(`Unknown Status: ${body ? body.status : 'NO BODY'}`);
            }
        } else {
            callback(error);
        }
    });
};

module.exports = {
    geocodeAddress
};