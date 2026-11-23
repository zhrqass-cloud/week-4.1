// Task 5: getShippingCost (Easy)
// Calculate the shipping price (use switch).
//
// - "OM" costs 2, "AE" costs 5, any other country costs 15.
// - Express delivery doubles the price.

function getShippingCost(country, isExpress) {
  // your code
}

// Expected output:
console.log(getShippingCost("OM", false));  // 2
console.log(getShippingCost("AE", false));  // 5
console.log(getShippingCost("US", false));  // 15
console.log(getShippingCost("OM", true));   // 4
console.log(getShippingCost("US", true));   // 30
