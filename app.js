console.log('Starting app.js!');

const fs = require('fs');
const notes = require('./notes')
// const add = require('./add')

fs.appendFileSync('greetings.txt', 'Hello World!');

console.log(notes.add(5, 10));