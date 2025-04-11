const { JSDOM } = require("jsdom");
const fs = require("fs");

fs.readFile("2.jsdom.html", "utf8", (err, html) => {
  if (err) {
    console.error(err);
    return;
  }
});
const dom = new JSDOM(html);
const window = dom.window;
const document = window.document;

myDiv.textContent = "Modified Content";

console.log(document.body.innerHTML);
