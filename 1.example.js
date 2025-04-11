/* Problem: You have an unordered list (<ul>) and want to add a new list item
(<li>) to the end of the list. */

// HTML Structure
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>;

// JavaScript Code
const myList = document.getElementById("myList"); // Get the unordered list
const newItem = document.createElement("li"); // Create a new list item
newItem.textContent = "New Item"; // Set the text content
myList.appendChild(newItem); // Append the new item to the list
