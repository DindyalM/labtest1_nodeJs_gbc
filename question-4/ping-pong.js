var events = require('events');
var eventEmitter = new events.EventEmitter();
var moment = require('moment');


//Create an event handler:
var myEventHandler = function () {
    console.log('ping' + moment().format());
    eventEmitter.emit('ping');
}

var callHandler = function () {
    console.log('pong!' + moment().format());
    eventEmitter.emit('pong');
}

//Assign the eventhandler to an event:
eventEmitter.on('ping', myEventHandler);
eventEmitter.on('pong', callHandler);

  //Fire the 'scream' event:
eventEmitter.emit('ping');
eventEmitter.emit('pong');

setTimeout(myFunc, 1, '');