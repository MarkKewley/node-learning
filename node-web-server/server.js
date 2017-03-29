const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 9001;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);

// middleware - ORDER MATTERS!
app.use((req, res, next) => {
    const now = new Date().toString();
    const log =`${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', err => err ? console.error(err) : '');
    next();
});

// app.use((req, res, next) => {
//    res.render('maintenance.hbs')
// });

app.use(express.static(__dirname + '/public'));


// Handle bars methods
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

app.get('/', (req, resp) => {
    resp.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Get out of here!'
    })
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page'
   });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Oh Shiz! Something went wrong yo!'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});