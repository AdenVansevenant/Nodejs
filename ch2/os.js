const os = require("os")
var totalmemory = os.totalmem()
var freememory = os.freemem()
var ostype = os.type()
var uptime = os.uptime()

console.log(`OS Type: ${ostype}`)   
console.log(`Uptime: ${uptime} seconds`)
console.log(`Total Memory: ${totalmemory} bytes`)
console.log(`Free Memory: ${freememory} bytes`)

