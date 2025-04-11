// Imagine you're building a program to control a robot that
// interacts with a webpage containing a form. The robot
// needs to fill out the form with data from its sensors and
// then submit the form. This involves more complex DOM
// manipulation and event handling.

const { JSDOM } = require("jsdom");

const html = `
  <!DOCTYPE html>
  <html>
  <body>
    <form id="myForm">
    <label for="name">Name:</label>
    <input type="text id="name" name="name"><br><br>
    <label for="location">Location:</label>
    <select id="status" name="status">
      <option value="operational">Operational</option>
      <option value="maintenance">Maintenance</option>
    </select><br><br>
    <input type="submit" value="Submit">
  </form>
 </body>
 </html>
`;

const dom = new JSDOM(html);
const window = dom.window;
const document = window.document;

// Simulate getting robot data
const robotData = {
  name: "Robot Alpha",
  location: "Warehouse A",
  status: "operational",
};

// Fill out the form
document.getElementById("name").value = robotData.name;
document.getElementById("location").value = robotData.location;
document.getElementById("status").value = robotData.status;

// Simulate form submission
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  console.log("Form submitted with data:", robotData);
  // Here you would typically send the data to a server
});

// Trigger form submission
form.submit();

// How does this example relate to the previous example of
// modifying a div in terms of DOM manipulation?
// What are the additional challenges involved in
// interacting with a form and handling events?
// How could you modfiy the code to handle different types
// of form elements, such as checkboxes, radio buttons, or
// file inputs?
