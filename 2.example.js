/*Problem: You have a nested list structure with a heading and multiple list items. You want to:
- Change the text of the heading to "Updated Heading".
- Remove the second list item within the nested list.
- Add a new list item with text "New Item" at the beginning of the nested list.*/

// HTML Structure
<ul id="mainList">
  <li>
    <h2>Original Heading</h2>
    <ul id="nestedList">
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ul>
  </li>
</ul>;

// JavaScript Code
const mainList = document.getElementById("mainList");
const heading = mainList.querySelector("h2"); // Find the heading
heading.textContent = "Update Heading"; // Update the heading text

const nestedList = document.getElementById("mainList");
const secondItem = nestedList.childNodes[1]; // Access the second list item
nestedList.removeChild(secondItem); // Remove the second list item

const newItem = document.createElement("li"); // Create a new list item
newItem.textContent = "New Item";
nestedList.insertBefore(newItem, nestedList.firstChild); // Insert at the beginning
