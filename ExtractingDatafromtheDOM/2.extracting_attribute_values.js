// HTML Structure
<a href="https://www.example.com" target="_blank">
  Visit our website
</a>;

// JavaScript Code
const link = document.querySelector("a");
const hrefValue = link.getAttribute("href"); // Get the value of the 'href attribute
console.log(hrefValue); // Output: https://www.example.com
