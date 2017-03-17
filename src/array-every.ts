
// ES5 introduces Array.prototype.every/some

// Checking whether every (or at least some) element of the
// array satifies a specific requirement
// Important characteristic of these aggregates is that they can short-circuit
// The result might be known before all the element have been checked

var persons = [{ name: 'James'}, { name: 'John'}];

var allNamesStartWithJ =
    persons.every(function(person) {
        return person.name[0] === 'J';
    });

console.log(allNamesStartWithJ);
