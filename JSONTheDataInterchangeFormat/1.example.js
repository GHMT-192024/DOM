/*
Problem: You are building a simple web application to display information about a restaurant's menu.
You receive the menu data from an API in JSON format. Parse the JSON and display the menu items.
*/

// Assuming you have recieved menu data from an API in JSON format:
const menuData = `{
  "menu": [
    { "name": "Pizza", "description": "Classic Margherita pizza", "price": 10.99 },
    { "name": "Salad", "description": "Mixed greens with vinaigrette", "price": 7.99 }
  ]
}`;

const menu = JSON.parse(menuData); // Parse the JSON data

const menuItems = menu.menu; // Access the array of menu items

menuItems.forEach((item) => {
  console.log(
    `- ${item.name}: ${item.description} ($${item.price.toFixed(2)})`
  );
});
