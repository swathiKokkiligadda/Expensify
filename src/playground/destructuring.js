/* const person = {
  name: "Swathi",
  age: 14,
  location: {
    city: "Chicago",
    temp: 92,
  },
};

const { name = "swaathi", age } = person;
const { city, temp } = person.location;
console.log(`Its ${temp} in ${city}`);
console.log(name);

const book = {
  title: "Ego",
  author: "Ryan Holiday",
  publisher: {
    name: "penguin",
  },
};

const { name: publisherName = "self-published" } = book.publisher;
console.log(publisherName);
 */

const address = ["1511, division street", "Chicago", "IL", "61920"];
const [, city, state = Newyork] = address;
console.log(`You are in  ${city}`);
const item = ["coffee", "2.0", "2.5", "2.75"];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);

const outerFunction = () => {
  let count = 0;
  const innerFunction = () => {
    return (count += 1);
  };
  return innerFunction;
};
const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

const var2 = 20;
function newFun() {
  console.log(var2);
  var var2 = 10;
  console.log(var2);
}
newFun();
