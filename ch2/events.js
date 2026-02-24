const EventEmitter = require('events')
const emitter = new EventEmitter() //object creeren

//een listeren registeren
emitter.on('messageLogged', function(){
    console.log('Listener called')
})

// emit (een event)
emmiter.emit('messageLogged')