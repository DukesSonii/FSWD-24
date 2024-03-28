const users = [
  { name: "Duke", age: 26 },
  { name: "Sam", age: 54 },
  { name: "firoz", age: 30 },
  { name: "shakeel", age: 16 },
  { name: "wakeel", age: 22 },
];

const op = users.map((x) => {
  return x.name;
});

console.log(op);
//or (both are same)
const names = users.map((x) => {
  return x.name;
});

const namess = users.map((x) => x.name);
console.log(namess);

//undefined
// const op2 = users.map((x) => {
//   x.name;
// });
// console.log(op2);

const students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [80, 75, 78] },
  { name: "Charlie", grades: [95, 92, 98] },
];

const res = students.map((x) => {
  const sum = x.grades.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  const avggrade = sum / x.grades.length;
  return {
    name: x.name,
    avg_grade: avggrade,
  };
});
console.log(res);

const data = [
  { name: "Duke", age: 26 },
  { name: "Sam", age: 54 },
  { name: "firoz", age: 30 },
  { name: "shakeel", age: 16 },
  { name: "wakeel", age: 22 },
];

const filter = data.filter((X) => X.age <= 30).map((x) => x.name);

console.log(filter);

//filter an array of objects based on multiple conditions
const ds2 = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 17, isActive: true },
  { name: "Charlie", age: 20, isActive: false },
  { name: "David", age: 30, isActive: true },
];

const filteredUsers = ds2.filter((user) => user.age > 18 && user.isActive);

console.log(filteredUsers);

// const datamod = [
//   {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//     salary: 60000,
//     department: "Marketing",
//   },
//   {
//     name: "Bob",
//     age: 30,
//     city: "San Francisco",
//     salary: 75000,
//     department: "Engineering",
//   },
//   {
//     name: "C",
//     age: 28,
//     city: "Los Angeles",
//     salary: 70000,
//     department: "Finance",
//   },
//   {
//     name: "",
//     age: 35,
//     city: "Chicago",
//     salary: 80000,
//     department: "HR",
//   },
//   {
//     name: "Emma",
//     age: 27,
//     city: "Boston",
//     salary: 65000,
//     department: "Operations",
//   },
// ];

// const bonus = datamod.map((x) => {
//   const bonus = x.salary * 0.1;
//   return {
//     ...x,
//     bonus,
//   };
// });
// console.log("BONUS IS", bonus);

const datamod = [
  {
    name: "Alice",
    age: 25,
    city: "New York",
    salary: 60000,
    department: "Marketing",
  },
  {
    name: "Bob",
    age: 30,
    city: "San Francisco",
    salary: 75000,
    department: "Engineering",
  },
  {
    name: "C",
    age: 28,
    city: "Los Angeles",
    salary: 70000,
    department: "Finance",
  },
  {
    name: "",
    age: 35,
    city: "Chicago",
    salary: 80000,
    department: "HR",
  },
  {
    name: "Emma",
    age: 27,
    city: "Boston",
    salary: 65000,
    department: "Operations",
  },
  {
    name: "ABC",
    age: 27,
    city: "Boston",
    salary: 65000,
    department: "Operations",
  },
];

// Calculate bonus for each person
const bonusData = datamod.map((x) => {
  const bonus = x.salary * 0.1;
  return {
    ...x,
    bonus,
  };
});

// Function to render data on the webpage
function renderData(data) {
  const container = document.getElementById("dataContainer");

  const htmlData = data.map(
    (x) => `
      <div>
        <p>Name: ${x.name}</p>
        <p>Age: ${x.age}</p>
        <p>City: ${x.city}</p>
        <p>Salary: ${x.salary}</p>
        <p>Bonus: ${x.bonus}</p>
        <hr>
      </div>
    `
  );
  container.innerHTML = htmlData.join("");
}

// Function to toggle visibility of data container
function toggleDataVisibility() {
  const dataContainer = document.getElementById("dataContainer");
  const button = document.getElementById("toggleButton");

  if (dataContainer.style.display === "none") {
    dataContainer.style.display = "block";
    button.textContent = "Hide Data";
  } else {
    //data show hone ke baad usko hide krne ke liye
    dataContainer.style.display = "none";
    button.textContent = "Show Data";
  }
}

// Add event listener to the button
document
  .getElementById("toggleButton")
  .addEventListener("click", toggleDataVisibility);

// Initially render the data as hidden
renderData(bonusData);

// Given an array of shopping items and their prices, calculate the total cost using reduce.

const shoppingItems = [
  { name: "Apples", price: 25 },
  { name: "Bananas", price: 12 },
  { name: "Milk", price: 3 },
  { name: "Bread", price: 20 },
];

const shop = shoppingItems.reduce(function (acc, curr) {
  return acc + curr.price;
}, 0);

console.log(shop);

const citytCountry = {
  "New York": "USA",
  "San Francisco": "USA",
  "Los Angeles": "USA",
  Chicago: "USA",
  Boston: "India",
};

// Create a new array by mapping each person's city to country
const arr = datamod.map((x) => {
  return {
    ...x,
    country: citytCountry[x.city],
  };
});

console.log(arr);

//map age to square value in same dataset datamod
const agemod = datamod.map((x) => {
  return {
    ...x,
    age: x.age ** 2,
  };
});

console.log(agemod);

const filterbycity = datamod.filter((x) => x.city != "New York");
console.log("filter by city", filterbycity);

// filter out individuals  whose names are not provided
const filteredDatamod = datamod.filter((person) => person.name.trim() == "");

const salaries = [60000, 70000];

const sal = datamod.filter(
  (x) => x.salary >= salaries[0] && x.salary <= salaries[1]

  //if we have to find total salaries of above filtered
);
const totalSalaries = sal.reduce((acc, curr) => {
  return acc + curr.salary;
}, 0);
console.log("Filtered data based on salary ", sal);
console.log("Total salary: ", totalSalaries);

// Map the names individuals and their cities to an array of strings (e.g., "Alice - New York"), filter out those who
// are from "New York", and then calculate the total count of the filtered individuals
const city = " New York";
const mapofcity = datamod
  .map((x) => x.name + "-->" + " " + x.city)
  .filter((x) => !x.includes(city));
console.log(mapofcity);

const cities = datamod.map((x) => x.city);

const uniquecities = cities.reduce(function (acc, curr) {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(cities);
console.log(uniquecities);
