const cheerio = require("cheerio");
const fs = require("fs"); // Import the file system module

fs.readFile("1.cheerios.html", "utf8", (err, html) => {
  if (err) {
    console.error(err);
    return;
  }

  const $ = cheerio.load(html);
  const title = $("title").text();
  const paragraphs = $("p").text();
  const listItems = $("li")
    .map((i, el) => $(el).text())
    .get();

  console.log("Title:", title);
  console.log("Paragraphs:", paragraphs);
  console.log("List Items:", listItems);
});
