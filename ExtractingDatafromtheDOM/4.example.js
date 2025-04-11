const { JSDOM } = require("jsdom");

const html = `
<!DOCTYPE html>
<html>
  <body>
    <div class="post">
      <h1 class="title">Post 1</h1>
      <div class="tags">
        <span class="tag">javascript</span>
        <span class="tag">node.js</span>
      </div>
    </div>
    <div class="post">
      <h2 class="title>Post 2</h2>
      <div class="tags">
        <span class="tag">javascript</span>
        <span class="tag">html</span>
      </div>
     </div>
    </body>
   </html>
   `;

const dom = new JSDOM(html);
const document = dom.window.document;

document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".post");
  const tagMap = {};

  posts.forEach((post) => {
    const title = post.querySelector(".title").innerText;
    const tags = post.querySelectorAll(".tags .tag");

    tags.forEach((tag) => {
      const tagName = tag.innerText;
      if (!tagMap[tagName]) {
        tagMap[tagName] = [];
      }
      tagMap[tagName].push(title);
    });
  });

  console.log(tagMap);
});
