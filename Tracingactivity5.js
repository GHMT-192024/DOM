// Imagine you're building a program to control a robot that
// interacts with a webpage. The robot needs to add new
// entries to a list of tasks displayed on the page. Each time
// the robot completes a task, it should update the webpage
// dynamically by adding a new list item to the task list.

// HTML Structure
<ul id="taskList">
  <li>Task 1: Move to location A</li>
  <li>Task 2: Pick up item B</li>
</ul>;

// JavaScript Code
function addTaskToList(taskDescription) {
  const taskList = document.getElementById("taskList"); // Get the unordered list
  const newTaskItem = document.createElement("li"); // Create a new list item
  newTaskItem.textContent = taskDescription; // Set the text content
  taskList.appendChild(newTaskItem); // Append the new item to the list
}

// Simulate completing a task and updating the list
addTaskToList("Task 3: Deliver item C to location D");

// How does this example relate to the previous example of
// adding a list item in terms of DOM manipulation and
// updating the webpage?
// What other actions could the robot perform on the webpage
// to interact with the task list? (e.g., marking tasks as
// complete, removing tasks, reordering tasks)
