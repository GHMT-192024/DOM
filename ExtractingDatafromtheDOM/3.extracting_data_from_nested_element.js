// HTML Structure
<div id="container">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>;

// JavaScript Code
const container = document.getElementById("container");
const listItems = container.querySelectorAll("ul li"); // Find all list within the container

listItems.forEach((listItem) => {
  console.log(listItem.textContent);
});
// Output:
// Item 1
// Item 2
