// Imagine you're building a program to control a robot that
// needs to interact with a webpage containing a form. The
// robot needs to extract the action URL of the form to
// understand where the form data will be submitted.

// HTML Structure
<form id="myForm" action="/submit-data" method="post">
  <label for="name">Name</label>
  <input type="text" id="name" name="name">
    <br></br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
      <br></br>
      <button type="submit">Submit</button>
    </input>
  </input>
</form>;

// JavaScript Code
const form = document.getElementById("myForm");
const actionUrl = form.getAttribute("action"); // Get the value of the 'action' attribute
console.log("Form Action URL:", actionUrl); // Output: /submit-data

// How does this example relate to the previous example of
// getting the href attribute in terms of DOM manipulataion
// and accessing element properties?
// What is the purpose of the 'action' attribute in a form?
// What other attributes of the form might be relevant for
// the robot to extract or interact with? (e.g., method,
// enctype)
