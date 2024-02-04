// Importing the log function from the console module
const { log } = require('console');
// Importing the EventEmitters class from the events module
const EventEmitters = require('events');

// Creating a new instance of the EventEmitters class
const customEmitter = new EventEmitters();

// Listening for the 'response' event and logging a message when the event is emitted
customEmitter.on('response', (name, id) => {
    log(`Hii ${name} - your id is ${id}`);
});

customEmitter.on('response2', (name, id) => {
    log(`Hii ${name} - your id is ${id}`);
});

// Emitting the 'response' event
customEmitter.emit("response", "john", 32);
customEmitter.emit("response2", "Prince", 33);