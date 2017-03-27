const yargs = require('yargs');
const axios = require('axios');

const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = '86fcb996cd3853c68afb8fc33a480725';
const DARKSKY_API_ENDPOINT = `https://api.darksky.net/forecast`;

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true // always parse the value as a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const addressValue = encodeURIComponent(argv.address);
const geoCodeUrl = `${GOOGLE_MAPS_API}?address=${addressValue}`;

axios.get(geoCodeUrl)
    .then(response => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address');
        }
        let latitude = response.data.results[0].geometry.location.lat;
        let longitude = response.data.results[0].geometry.location.lng;
        console.log(`The weather at ${response.data.results[0].formatted_address}`);
        return axios.get(`${DARKSKY_API_ENDPOINT}/${API_KEY}/${latitude},${longitude}`)
    })
    .then(response => {
        let temperature = response.data.currently.temperature;
        let apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}. It Feels like ${apparentTemperature}.`);
    })
    .catch(err => {
        if (err.code === 'ENOTFOUND') {
            console.log('Unable to connect to Api service');
        } else {
            console.log(err.message);
        }
    });