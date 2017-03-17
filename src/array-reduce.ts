
// ES5 introduces Array.prototype.reduce

// reduce an array of values to a single value
// example: summing a list, geting the average of a list

var sum = 0;
var data2 = [1,2,3,4,5];

for(var i = 0; i < data2.length; i++) {
    sum += data2[i];
}
// 15

sum = 0;

// the function passed to reduce is called once for each element
// of the array, each time being passed the sum so far, as well as te next element
var sum = data2.reduce(function(soFar, next) {
    return soFar + next;
});
// 15
