// Define the data range
let data = [10, 20, 30, 40, 50];

// Create a linear scale with a defined domain
let xScale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([0, 500]);

// Example usage:
console.log(xScale(25)); // Output: Some value within the range [0, 500] based on the input 25
