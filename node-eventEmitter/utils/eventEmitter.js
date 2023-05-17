const EventEmitter = require('events');
let eventEmitter;

module.exports = {
    init : ()=>{
        eventEmitter = new EventEmitter();
        return eventEmitter;
    },
    getInstance: () => {
        if(!eventEmitter){
            throw new Error("Instance not intialized")
        }
        return eventEmitter
    }
}