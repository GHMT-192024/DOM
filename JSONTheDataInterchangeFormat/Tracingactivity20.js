// Imagine you're building a program to control a robot that
// works in a warehouse. the robot receives inventory updates
// in JSON format from a central server. the robot needs to
// parse this JSON data and update its internal inventory
// records accordingly.

// Assuming the robot receives the following JSON data:
const inventoryData = `{
  "warehouse": "Warehouse A",
  "updated_at": "2024-10-26T11:00:00Z",
  "items": [
    { "id": "A123", "name": "Product X", "quantity": 50},
    { "id": "B456", "name": "Product Y", "quantity": 25},
    { "id": "C789", "name": "Product Z", "quantity": 100}
  ]  
}`;

const inventory = JSON.parse(inventoryData); // Parse the JSON data

console.log("Warehouse:", inventory.warehouse);
console.log("Updated at:", inventory.updated_at);

inventory.items.forEach((item) => {
  console.log(`-${item.name} (${item.id}): ${item.quantity} units`);
});

// How does this example relate to the restaurant menu
// example in terms of parsing JSON data and accessing its
// properties?
// What other information might be included in the inventory
// data? (e.g., item location, supplier, unit price)
// How could you modify the code to handle different types
// of inventory updates, such as adding new items, removing
// items, or updating existing quantities?
