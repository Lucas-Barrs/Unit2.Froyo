// const froy = {
//   flavors: ['vanilla', 'coffee','strawberry'],
//   quantity = (
//     vanillaNum: 3,
//     coffeeNum: 2,
//     strawberryNum: 1,
//   )
// }

// const order = {
//   vanilla: 3,
//   coffee: 2,
//   strawberry: 1,
// };
// console.table(order);

const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla, chocolate, strawberry"
);
// const stringArray = userInputString.split(",");

// System.out.println(Arrays.toString(words));

// string = userInputString
// delimiter = ","

// split_string = string.split(delimiter)
// console.log(split_string)

const flavorArr = userInputString.split(",")

console.log(flavorArr)

const flavorCounts = {}

const flavorsSoFar = Object.keys(flavorCounts)

for(let i=0; i<flavorArr.length; i++) {
  if(flavorsSoFar.includes(flavorArr[i])) {
  flavorCounts[flavorArr[i]] += 1
}

else {
  flavorCounts[flavorArr[i]] = 1
}
}
console.table(flavorCounts)