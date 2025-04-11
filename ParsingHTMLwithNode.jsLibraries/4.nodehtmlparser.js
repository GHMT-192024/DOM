const { parse } = require("node-html-parser");

const html = '<div class="my-class">Hello World</div>';
const root = parse(html);
const divElement = root.querySelector(".my-class");

console.log(divElement.textContent); // Output: Hello World
