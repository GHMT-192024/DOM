// Imagine you're building a program to control a robot that
// explores an unknown environment and collects samples. The
// robot needs to store the collected sample data in a file
// for later analysis. The data should include the location
// where the sample was collected, the date and time of
// collection, and a description of the sample.

const fs = require("fs");

// Function to save sample data to a JSON file
function saveSampleData(sampleData, filename) {
  const jsonString = JSON.stringify(sampleData, null, 2); // Use indentation for better readability
  fs.writeFile(filename, jsonString, (err) => {
    if (err) {
      console.error("Error saving sample data:", err);
    } else {
      console.log("Sample data saved successfully!");
    }
  });
}

// Example sample data
const sample = {
  location: {
    latitude: 34.0522,
    longitude: -118.2437,
  },
  timestamp: new Date(),
  description: "Soil sample with high mineral content",
};

saveSampleData(sample, "sample.json"); // Save the sample data to sample.json

// How does this example relate to the saveTodoList()
// example in terms of saving data to a JSON file?
// What are the benefits of storing the sample data in JSON
// format?
// What other information could the robot include in the
// sample data? (e.g., sensor readings, images, analysis
// results)
