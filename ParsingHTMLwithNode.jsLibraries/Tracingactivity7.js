// Imagine you're buidling a program to control a robot that
// needs to extract information from web pages. The robot
// visits different websites to gather data, such as product
// prices, news headlines, or weather information. The robot
// uses Cheerio to parse the HTML content and extract the
// relevant data.

const cheerio = require("cheerio");

const html = (
  <html>
    <head>
      <title>Weather Report</title>
    </head>
    <body>
      <h1>Current Conditions</h1>
      <p>Temperature: 25°C</p>
      <p>Humidity: 60%</p>
      <p>Wind: 10 km/h</p>
    </body>
  </html>
);

const $ = cheerio.load(html); // Load HTML into cheerio

// Select elements and extract data
const temperature = $('p:contains("Temperature")').text().split(": ")[1];
const humidity = $('p:contains("Humidity")').text().split(": ")[1];
const wind = $('p:contains("Wind)').text().split(": ")[1];

console.log("Temperature:", temperature); // Output: 25°C
console.log("Humidity:", humidity); // Output: 60%
console.log("Wind:", wind); // Output: 10 km/h

// How does this example relate to the previous example of
// using Cheerio to extract data from HTML in terms of
// selecting elements and manipulating the data?
// What other information could the robot extract from the
// weather report webpage? (e.g., forecast for the next few
// days, precipitation probability, UV index)
// How could you modify the code to extract this
// information?
