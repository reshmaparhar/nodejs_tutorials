const EventEmittor = require('events');

const custom_event = new EventEmittor();

custom_event.on('response',() =>{
    console.log(`hello guys`);
})
custom_event.on('response',(name) =>{
    console.log(`data received guys ${name}`);
})
custom_event.emit('response','reshma');