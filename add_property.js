// const person = {};
// person.name = "Pete";
// person.id = "123";
// console.log(person);

// const person = {};
// person["name"] = "Pete";
// person["id"] = "123";
// console.log(person);

// const person = {};
// const name = "name";
// const id = "id";
// person[name] = "Pete";
// person[id] = "123";
// console.log(person);

// const person = {};
// const name = "name";
// const id = "id";
// person[name] = "Pete";
// person[id] = "123";
// console.log(person);

// function createObject(firstKey, firstValue, secondKey, secondValue) {
//   const obj = {};
//   obj[firstKey] = firstValue;
//   obj[secondKey] = secondValue;
//   return obj;
// }
// const person = createObject("name", "Pete", "id", "123");
// console.log(person);

function createObject(...args) {
  const obj = {};
  for (let i = 0; i < args.length; i += 2) {
    obj[args[i]] = args[i + 1];
  }
  return obj;
}
const person = createObject(
  "name",
  "Pete",
  "id",
  "123",
  "age",
  "41",
  "specialization",
  "geek"
);
console.log(person);
// const emptyObject = createObject();
// console.log(emptyObject);
