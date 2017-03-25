console.log('Starting notes.js');


const addNote = (title, body) => {
    console.log(`Add Note with title: [${title}] and body [${body}]`);
};

const getAllNotes = () => {
    console.log('Getting all Notes');
};

const getNote = title => {
    console.log(`Reading Note with title: [${title}]`);
};

const removeNote = title => {
    console.log(`Removing Note with title: [${title}]`);
};

const executeNoteAction = (action, args) => {
    switch (action) {
        case 'add':
            addNote(args.title, args.body);
            break;
        case 'list':
            getAllNotes();
            break;
        case 'read':
            getNote(args.title);
            break;
        case 'remove':
            removeNote(args.title);
            break;
        default:
            console.log('Unknown Note action', action);
    }
};

module.exports = {
    executeNoteAction
};