const { Parser } = require("htmlparser2");

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>MTankala's Website</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>Robots are going to run each and every city in the United States</p>
  </body>
</html>
`;

let title = "";
let productName = "";
let productPrice = "";

const parser = new Parser(
  {
    onopentag: (name, attributes) => {
      if (name === "title") {
        title = attributes.title;
      }
    },
    ontext: (text) => {
      if (productName === "") {
        productName += text;
      } else if (productPrice === "") {
        productPrice += text;
      }
    },
    onclosetag: (tagname) => {
      if (tagname === "h1" && productName !== "") {
        productName = productName.trim();
      } else if (tagname === "p" && productPrice !== "") {
        productPrice = productPrice.trim();
      }
    },
  },
  { decodeEntities: true }
);

parser.write(html);
parser.end();

console.log("Title:", title);
console.log("Product Name:", productName);
console.log("Product Price:", productPrice);
