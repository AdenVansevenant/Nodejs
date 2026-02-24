const fs = require('node:fs')

//synchronous
const files = fs.readdirSync('./')
console.log(files)

//assynchrnous
//fs.readdir('./', function(err, files){
//    if (err) console.log('Error', err)
//    else console.log(result, files)
//});

fs.readdir('./unixisteddirrectory', (err, files) => {
    console.log('Error', err)
    console.log('result', err, files)
})
