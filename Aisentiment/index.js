var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('This Node.js course is awesome!');
var result2 = sentiment.analyze('The teacher does a terrible job.');

console.log(result);
console.log(result2);