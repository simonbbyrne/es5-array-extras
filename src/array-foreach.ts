

// ES5 introduces Array.prototype.forEach

var people = ["Bob", "Jane","Mary", "Chris"];
var processPerson = function(person) {
    console.log(person);
};

for(var person in people) {
    processPerson(person);
}
// 0, 1, 2, 3

for(var i = 0; i < people.length; i++) {
    processPerson(people[i]);
}
// Bob, Jane, Mary, Chris

people.forEach(processPerson);
// Bob, Jane, Mary, Chris
