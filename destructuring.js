const person = {
  name: "Pete",
  company: {
    name: "Sony",
    headquaters: {
      country: "Japan",
    },
  },
};

// console.log(person.company.headquaters.country);

// const country = person.company.headquaters.country;
// console.log(country);

// const { country } = person.company.headquaters;
// console.log(country);

const {
  company: {
    headquaters: { country: countryName },
  },
} = person;
console.log(countryName);
