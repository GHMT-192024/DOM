const cheeerio = require("cheerio");

const html =
  <!DOCTYPE html>
  <html>
  <head>
    <title>MTs' Website</title> 
    </head>
    <body>
      <h1>Welcome</h1>
      <p>AI is our future.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
     </ul>  
    </body>  
  </html>

const $ = cheerio.load(html); // Load HTML into cheerio

// Select elements and extract data
const title = $('title').text();
const paragraphs = $('p').text();
const listItems = $('li').map((i, el) => $(el).text()).get(); // Use map to extract text from each list item

console.log("Title:", title); // Output: MTs' Website
console.log("Paragraphs:", paragraphs); // Output: AI is our future.
console.log("List Items:", listItems); // Output: ["Item 1", "Item 2"]