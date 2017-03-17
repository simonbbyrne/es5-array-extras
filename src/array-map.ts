
// ES5 introduces Array.prototype.map

var data = ["hello", "simon", "simon", "es5"];
var newData = [];

var capitalizeFirst = function (value: string) {
    return value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

// create a new array with applied transformation
for (var i = 0; i < data.length; i++) {
    newData.push(capitalizeFirst(data[i]));
}
// ["Hello", "Simon", "Es5"]

newData = [];

newData = data.map(capitalizeFirst)
console.log(newData)

// find last index of a value in an array
// search backwards, break when found
var i = 0, searchValue = 'simon';
for(i = data.length - 1; i >= 0; i--) {
    if(data[i] === searchValue)
        break;
}
// 2

var i = data.lastIndexOf(searchValue);
// 2