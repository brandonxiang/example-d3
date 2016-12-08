var d3 = require("d3-interpolate");

var i = d3.interpolateNumber(10, 20);
console.log(i(0.0)) // 10
console.log(i(0.2)); // 12
console.log(i(0.5)); // 15
console.log(i(1.0)); // 20
