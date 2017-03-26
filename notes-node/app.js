const yargs = require('yargs');

const notes = require('./notes');

const title = {
    describe: 'The title of the Note which is unique',
    demand: true,
    alias: 't'
};
const body = {
    describe: 'Text for the Note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', { title, body })
    .command('list', 'List all notes')
    .command('read', 'Reads a note by title', { title })
    .command('remove', 'Removes a note by title', { title })
    .command('clear', 'Removes all notes')
    .help()
    .argv;
const command = argv._[0];

notes.executeNoteAction(command, argv);