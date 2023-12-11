// events and event emitter
const events = require('events'); // importing events module from nodejs

console.log('1. Program Started');
// creating an obj for EventEmitter class
const eventEmitter = new events.EventEmitter();

// Let's define custom event thru program
eventEmitter.on('reportGenerated', () => {
  console.log('3. Report generated successfully!');
});

console.log('2. Before the Custom Event Triggered');

// Triggerring / emitting the custom event
eventEmitter.emit('reportGenerated');

console.log('4. Program Ended');