const request = require('request');

const API_KEY = '86fcb996cd3853c68afb8fc33a480725';
const DARKSKY_API_ENDPOINT = `https://api.darksky.net/forecast`;

const getWeatherData = (latitude, longitude, callback) => {
  request({
      url: `${DARKSKY_API_ENDPOINT}/${API_KEY}/${latitude},${longitude}`,
      json: true
  }, (error, response, body) => {
     if (!error && response.statusCode === 200 && body.code !== 400) {
         callback(undefined, body.currently);
     } else {
        callback('Unable to fetch weather');
     }
  });
};

module.exports = {
    getWeatherData
};