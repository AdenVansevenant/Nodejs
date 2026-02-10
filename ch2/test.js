console.log("Hello, World");

var message = 'test';

global.console.log(message);

global.console.log(_filename);
//global.console.log()

setTimeout(() => {
    console.log('this messange is deleyed by 2 seconds');
}, 2000);