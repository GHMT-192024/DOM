const { JSDOM } = require("jsdom");

const html = `<p id="MTparagraph">This paragraph is written with text & code.</p>`;
const dom = new JSDOM(html);

const paragraph = dom.window.document.getElementById("MTparagraph");
const text = paragraph.textContent;
console.log(text);
