// Imagine you're building a program to control a robot that
// needs to analyze data from a complex web page containing
// information about various sensors. The webpage has a
// nested structure with sensor groups and individual sensor
// readings within each group. The robot needs to extract the
// sensor data, including sensor IDs, types, and readings, and
// then organize this data into a structured format for
// further analysis and decision making.

// HTML Structure
const html = `
  <div id="sensor-data">
    <h1>Temperature Sensors</h2>
    <ul>
      <li data-sensor-id="T1" data-sensor-type="temperature">25.5 °C</li>
      <li data-sensor-id="T2" data-sensor-type="temperature">28.2 °C</li>
    </ul>
    <h2>Humidity Sensors</h2>
    <ul>
      <li data-sensor-id="H1" data-sensor-type="humidity">60%</li>
      <li data-sensor-id="H2" data-sensor-type="humidity">75%</li>
    </ul>
  </div> 
`;

// JavaScript Code
const { JSDOM } = require("jsdom");
const dom = new JSDOM(html);
const document = dom.window.document;

const sensorData = {};

const sensorGroups = document.querySelectorAll("#sensor-data > h2");
sensorGroups.forEach((group) => {
  const sensorType = group.textContent.toLowerCase().replace(" sensors", ""); // Extract sensor type from heading
  const sensorList = group.nextElementSibling; // Get the <ul> element containing sensor readings
  const sensorItems = sensorList.querySelectorAll("li");

  sensorItems.forEach((item) => {
    const sensorId = item.getAttribute("data-sensor-id");
    const reading = parseFloat(item.textContent); // Extract and convert reading to number
    if (!sensorData[sensorType]) {
      sensorData[sensorType] = {};
    }
    sensorData[sensorType][sensorId] = reading;
  });
});

console.log("Sensor Data:", sensorData);
// Output:
// {
// temperature: { T1: 25.5, T2: 28.2 },
// humidity: { H1: 60, H2: 75 }
// }

// How does this example relate to the previous example of
// extracting data from posts in terms of DOM traversal and
// data organization?
// What are the additional challenges involved in extracting
// data from a nested structure and categorizing it by
// sensor type?
// How could you modify the code to handle more complex
// nested structures or different ways of representing
// sensor data in the HTML?
