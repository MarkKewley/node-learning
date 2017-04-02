const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Mark Kewley'
    }, {
        name: 'Nick DeGross'
    }]);
});

app.listen(9001, () => {
    console.log('Listening on 9001');
});

module.exports.app = app;