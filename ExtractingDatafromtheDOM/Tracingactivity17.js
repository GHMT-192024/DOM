// Imagine you're building a program to control a robot that
// interacts with a webpage containing a table of sensor
// readings. The robot needs to extract the data from the
// table, analyze it, and take actions based on the sensor
// values.

const { JSDOM } = require("jsodm");
// HTML Structure (simulate webpage)
const html = `
  <table>
    <thead>
      <tr>
        <th>Sensor ID</th>
        <th>Temperature (°C)</th>
        <th>Humidity (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>51</td>
        <td>25.5</td>
        <td>60</td>
      </tr>
      <tr>
        <td>52</td>
        <td>28.2</td>
        <td>75</td>
     </tr>
     <tr>
       <td>53</td>
       <td>23.8</td>
       <td>55</td>
     </tr>
    </tbody>
   </table>
`;

// JavaScript Code
const dom = new JSDOM(html);
const document = dom.window.document; // Access the document object

const sensorReadings = [];

const rows = document.querySelectorAll("tbody tr");
rows.forEach((row) => {
  const sensorId = row.cells[0].textContent;
  const temperature = parseFloat(row.cells[1].textContent);
  const humidity = parseFloat(row.cells[2].textContent);
  sensorReadings.push({ sensorId, temperature, humidity });
});

console.log("Sensor Readings:", sensorReadings);

// Analyze the sensor readings and take actions
sensorReadings.forEach((reading) => {
  if (reading.temperature > 28) {
    console.log(`Warning: High temperature detected at sensor
${reading.sensorId}!`);
    // Take action, e.g., activate cooling system
  }
  // ... other analysis and actions based on sensor data
});

// How does this example relate to the previous example of
// accessing list items in terms of DOM traversal and data
// extraction?
// What are the additional challenges involved in extracting
// data from a table structure?
// How could you modify the code to handle more complex
// tables with nested elements or irregular structures?
