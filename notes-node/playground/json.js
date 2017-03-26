// let obj = {
//     name: 'Mark',
//     age: 26,
//     sexy: true
// };
//
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(typeof obj);
// console.log(obj);

// let personString = '{"name": "Mark", "age": 26, "sexy": true}';
// let person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);

const fs = require('fs');

let originalNote = {
  title: 'Eragon',
  body: 'Saphira is awesome'
};
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);