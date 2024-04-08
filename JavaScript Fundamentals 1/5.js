let packageType = "express";
let estimatedDeliveryTime;

switch (packageType) {
  case "standard":
    estimatedDeliveryTime = "3-5 days";
    break;
  case "express":
    estimatedDeliveryTime = "1-2 days";
    break;
  case "overnight":
    estimatedDeliveryTime = "next day";
    break;
  default:
    estimatedDeliveryTime = "unknown";
}

console.log(
  "Estimated delivery time for",
  packageType,
  "package is",
  estimatedDeliveryTime + "."
);
