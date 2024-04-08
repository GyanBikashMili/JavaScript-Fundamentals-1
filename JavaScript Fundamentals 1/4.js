let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

const childTicketPrice = 100;
const adultTicketPrice = 150;
const seniorTicketPrice = 120;

let totalPriceChild = numberOfChilds * childTicketPrice;
let totalPriceAdult = numberOfAdults * adultTicketPrice;
let totalPriceSenior = numberOfSeniors * seniorTicketPrice;

let totalTicketPrice = totalPriceChild + totalPriceAdult + totalPriceSenior;

console.log("The total ticket price is", totalTicketPrice + ".");
