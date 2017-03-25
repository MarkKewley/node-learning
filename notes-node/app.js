console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes');

const command = argv._[0];
if (!command) {
    console.error('Invalid Usage!');
    console.log('Usage: node app.js <command> --arg1=s --arg2=s');
    return;
}

notes.executeNoteAction(command, argv);