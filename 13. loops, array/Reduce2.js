const users = [
  { firstname: "Duke", lastname: "Soni", age: 26 },
  //write 5 more values like above
  { firstname: "Sam", lastname: "benchod", age: 45 },
  { firstname: "deep", lastname: "Singh", age: 22 },
  { firstname: "daksh", lastname: "peter", age: 45 },
  { firstname: "jacob", lastname: "co", age: 16 },
];

const output = users.map((x) => x.firstname + " " + x.lastname);
console.log(output);

const filter = users.filter((x) => x.age == 45);

// if we want to find like {45:2,22:1}
//why we use reduce bcoz we have to iterate over the array and have to find one value inside the array

const reduce = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    //acc of age is like 26 not there then
    acc[curr.age] = 1;
  }
  return acc;
}, {});

//no data means {} empty object

const red = users.reduce(function (acc, curr) {
  // curr is this particular object at the first point { firstname: "Duke", lastname: "Soni", age: 26 },
  // curr.age = 26
  // check if acc[26] is present or not
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(reduce);

//find first name of people whose age is less than  22
//so in this we can use the concept of chaining after finding age of person i.e 22 we can run a map on it that is chaining of map,filter and reduce
const opp = users.filter((x) => x.age < 30).map((x) => x.firstname);
console.log(opp);

//same question with reduce
const filterage = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);
console.log(filterage);
