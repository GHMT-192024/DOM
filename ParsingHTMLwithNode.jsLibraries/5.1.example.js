/*Problem: You want to extract the title of an HTML page from a string containing its HTML code.*/

//Using jsdom
const { JSDOM } = require("jsdom");

const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Manas Tankala's Page Title</title>
  </head>
  </html>
`;

const dom = new JSDOM(html);
const document = dom.window.document;
const title = document.querySelector("title").textContent;

console.log("Page Title:", title); // Output: Manas Tankala's Page Title
