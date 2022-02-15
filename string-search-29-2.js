//todo 29-2 Apply Search includes, indexOf, startswith, endswith

const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop Dell",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];

const searching = "laptop";

//? indexOf
const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output); //by adding toLowerCase() the if condition will make the letters lowercase then check for similarity

//? includes()  -- used with dot notation
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);

//startsWith() adn endswith()
const dell = "dell";
for (const product of products) {
  if (product.toLowerCase().startsWith(dell.toLowerCase())) {
    output.push(product);
  }
}

console.log(output);
