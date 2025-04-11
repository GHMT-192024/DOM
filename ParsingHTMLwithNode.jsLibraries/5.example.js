//Using cheerio

const cheerio = require("cheerio");
const fs = require("fs"); // Import the file system module

fs.readFile("5.example.html", "utf8", (err, html) => {
  if (err) {
    console.error("Error reading HTML file:", err);
    return;
  }

  const $ = cheerio.load(html);
  const title = $("title").text();
  console.log("Page Title:", title);
});
