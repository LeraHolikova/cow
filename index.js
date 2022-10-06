const userInfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${userInfo.name} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));