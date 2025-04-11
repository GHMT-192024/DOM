const { Parser } = require("htmlparser2");

const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Manas' Website</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>Everything is going to be operated by computers.</p>
  </body>
  </html>
`;

let title = "";

const parser = newParser(
  {
    onopentag: (name, attributes) => {
      if (name === "title") {
        // Store the title when the <title> tag is opened
        title = attributes.title;
      }
    },
  },
  { decodeEntities: true }
);

parser.write(html);
parser.end();

console.log("Title:", title); // Output: Manas' Website
