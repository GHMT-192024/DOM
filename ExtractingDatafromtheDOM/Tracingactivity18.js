// Imagine you're building a program to control a robot that
// needs to analyze data from a web page containing a table
// of sensor readings. The robot needs to extract the sensor
// IDs, timestamps, and values, and then organize this data
// into a structured format for further analysis.

const { JSDOM } = require("jsdom");
// HTML Structure (simulated webpage)
const html = `
  <table>
    <thead>
      <tr>
        <th>Sensor ID</th>
        <th>Timestamp</th>
        <th>Value</th>
     </tr>
    </thead>
    <tbody>
    <tr>
      <td>S1</td>
      <td>2024-10-26T10:00:00Z</td>
      <td>25.5</td>
    </tr>
    <tr>
      <td>S2</td>
      <td>2024-10-26T10:05:00Z</td>
      <td>18.7</td>
    </tr>
    <tr>
      <td>S3</td>
      <td>2024-10-26T10:10:00Z</td>
      <td>32.1</td>
    </tr>
   </tbody>
  </table>
`;

// JavaScript Code
const dom = new JSDOM(html);
const document = dom.window.document;

const sensorData = {};

const rows = document.querySelectorAll("tbody tr");
rows.forEach((row) => {
  const sensorId = row.cells[0].textContent;
  const timestamp = new Date(row.cells[1].textContent); // Convert timestamp string to Date object
  const value = parseFloat(row.cells[2].textContent);
  if (!sensorData[sensorId]) {
    sensorData[sensorId] = [];
  }
  sensorData[sensorId].push({ timestamp, value });
});

console.log("Sensor Data:", sensorData);
// Output:
// {
// S1: [{ timestamp: 2024-10-26T10:00:00.000Z, value: 25.5}],
// S2: [{ timestamp: 2024-10-26T10:00:00.000Z, value: 18.7}],
// S3: [{ timestamp: 2024-10-26T10:00:00.000Z, value: 32.1}]
// }

// How does this example relate to the previous example of
// extracting data from posts in terms of DOM traversal and
// data organization?
// What are the additional challenges involved in extracting
// data from a table and converting it into a structured
// format?
// How could you modify the code to handle more complex
// tables with nested elements or irregular structures?
