
// Comma separated entries indicating 
// Purchaes ('P'), refunds ('R'), cancelled transactions ('C')
var transactions = "P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32";

// calsulate sum of all purchases

var result = transactions
    // Break th string into an array on commas
    .split(',')
    // Keep just the purchase transactions ('P')
    .filter(function(s) {
        return s.trim()[0] === 'P'
    })
    // Get the price associated with the purchase
    .map(function(s) {
        return Number(s.trim().substring(1).trim());
    })
    // Sum up the quantities of purchases
    .reduce(function(soFar, next) {
        return soFar + next;
    })

console.log(result);