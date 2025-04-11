/*
Problem: You are developing a web application that allows users to create
and manage their to-do lists.
You need to store the user's to-do list data persistently in a file using
JSON. The data should include the
list title and an array of tasks, each with a description and completion status.
*/
const fs = require("fs");

// Function to save the to-do list data to a JSON file
function saveTodoList(todoList, filename) {
  const jsonString = JSON.stringify(todoList);
  fs.writeFile(filename, jsonString, (err) => {
    if (err) {
      console.error("Error saving to-do list:", err);
    } else {
      console.log("To-do list saved successfully!");
    }
  });
}

// Example to-do list data
const todoList = {
  title: "Manas Tankalas To-Dos",
  tasks: [
    { description: "Take Dusk out to bathroom", completed: true },
    { description: "Give Dusk breakfast", completed: true },
    { description: "Take out dishes", completed: false },
  ],
};

saveTodoList(todoList, "todo.json"); // Save the to-do list data to todo.json
