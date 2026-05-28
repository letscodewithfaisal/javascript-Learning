// Button Click Event
{/* <button id="btn">Click Me</button>


  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    alert("Button Clicked!");
  }); */}

  // 2. Using map() in Arrays
//   const prices = [100, 200, 300];

// const updatedPrices = prices.map(price => price + 18);

// console.log(updatedPrices);

// 3. Filtering Users
// const users = [
//   { name: "Tony", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true }
// ];

// const activeUsers = users.filter(user => user.active);


// 5. API Data Handling
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data));

// 7. Search Feature
const products = ["Laptop", "Phone", "Tablet"];

const result = products.filter(product =>
  product.includes("Phone")
);

console.log(result);