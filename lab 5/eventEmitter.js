const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', () => {
  console.log('Hello from the "greet" event!');
});

myEmitter.emit('greet');