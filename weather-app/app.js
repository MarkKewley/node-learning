const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`The current weather for ${results.address}:`);
        weather.getWeatherData(results.latitude, results.longitude, (weatherErrorMessage, weatherResults) => {
            if (weatherErrorMessage) {
                console.log(weatherErrorMessage);
            } else {
                console.log(`Feels like: ${weatherResults.apparentTemperature}, really: ${weatherResults.temperature}`)
            }
        })
    }
});
