// Imagine you're building a program to control a robot that
// interacts with a webpage. The robot needs to read
// instructions from a paragraph on the page and execute
// those instructions to complete its tasks.

// HTML Structure
<p id="instructions">
  Move to Location A, pick up Item B, and deliver it to Location C.
</p>;

// JavaScript Code
const instructionsParagraph = document.getElementById("instructions");
const instructionsText = instructionsParagraph.textContent; // Get the text content

console.log("Instructions:", instructionsText);
// Output: Instructions: Move to Location A, pick up Item B, and deliver it to Location C.

// Process the instructions, e.g., split into individual commands, extract locations and items
const commands = instructionsText.split(/,\s*|\s+and\s+/); // Split by comma or "and"
console.log("Commands:", commands);
// Output: Commands: ['Move to Location A', 'pick up Item B', 'deliver it to Location C']

// Further processing and execution of commands
// ...

// How does this example relate to the previous example of
// getting text content in terms of DOM manipulation and
// accessing element properties?
// What are the benefits of extracting the instructions
// programmatically instead of hardcoding them in the
// JavaScript code?
// What other types of information might the robot need to
// extract from the webpage? (e.g., status updates, sensor
// readings, error messages)
