const fs = require('fs');
const _ = require('lodash');

const NOTE_FILE = 'note-data.json';

const fetchNotes = () => {
  try {
      let noteString = fs.readFileSync(NOTE_FILE);
      return JSON.parse(noteString);
  } catch (e) {
      return [];
  }
};

const saveNotes = (notes) => {
    fs.writeFileSync(NOTE_FILE, JSON.stringify(notes));
};

const addNote = (title, body) => {
    let note = {
        title,
        body
    };

    let notes = fetchNotes();

    let duplicateNotes = notes.filter(n => n.title === note.title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAllNotes = () => fetchNotes();

const getNote = title => fetchNotes().find(note => note.title === title);

const removeNote = title => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(n => n.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};

const deleteNotes = () => saveNotes([]);

const executeNoteAction = (action, args) => {
    let message;
    switch (action) {
        case 'add':
            let note = addNote(args.title, args.body);
            message = note ?
                `Successfully added note with title: [${note.title}] and body [${note.body}]` :
                'Couldn\'t add Note';
            break;
        case 'list':
            let notes = getAllNotes();
            message = notes.length !== 0 ?
                _.reduce(notes, (m, n) => m += `\nTitle: ${n.title} Body: ${n.body}`, ''):
                'No Notes Exist!';
            break;
        case 'read':
            console.log(args);
            let result = getNote(args.title);
            message = result ?
                `Found Note with title: [${result.title}] and body [${result.body}]` :
                `Couldn't find note with title [${args.title}]`
            break;
        case 'remove':
            message = removeNote(args.title) ?
                `Note [${args.title}] removed!` :
                `Note [${args.title}] doesn't exist!`;
            break;
        case 'clear':
            deleteNotes();
            message = 'Deleted all Notes';
            break;
        default:
            message = `Unknown Note action [${action}]`;
    }
    console.log(message);
};

module.exports = {
    executeNoteAction
};