import { Parser } from "htmlparser2";

const html = `
  <!DOCTYPE html>
  <html>
  <body>
    <a href="https://www.example.com">Example Website</a>
    <a href="https://www.google.com">Google</a>
  </body>
  </html>
`;

let links = [];

const parser = new Parser(
  {
    onopentag: (name, attributes) => {
      if (name === "a") {
        links.push({
          href: attributes.href,
          text: "", // Initialize the text content
        });
      }
    },
    ontext: (text) => {
      if (links.length > 0) {
        links[links.length - 1].text += text; // Append text to the last link object
      }
    },
  },
  { decodeEntities: true }
);

parser.write(html);
parser.end();

console.log("Links:", links);

const outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<pre>" + JSON.stringify(links, null, 2) + "</pre>";
