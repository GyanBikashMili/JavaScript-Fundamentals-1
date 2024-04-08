let amountINR = 850;
const exchangeRate = 82;

let amountUSD = amountINR / exchangeRate;

amountUSD = amountUSD.toFixed(2);

console.log(amountINR + " INR is " + amountUSD + " USD");
