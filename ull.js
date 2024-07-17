function drawToOffscreenGraphicsContext(context$2, path) {
    // Check if the offscreen graphics context is available
    if (!context$2) return true;

    // Begin a new path in the offscreen graphics context
    context$2.beginPath();

    // Add the specified path to the offscreen graphics context
    context$2.moveTo(path.start.x, path.start.y);
    path.points.forEach(point => {
        context$2.lineTo(point.x, point.y);
    });

    // Complete the path
    context$2.closePath();

    // Optionally, fill or stroke the path
    // context$2.fill();
    context$2.stroke();

    // Return false to indicate that drawing was performed
    return false;
}

// Usage example
const offscreenCanvas = document.createElement('canvas');
const offscreenContext = offscreenCanvas.getContext('2d');

// Define a path to be drawn
const path = {
    start: { x: 10, y: 10 },
    points: [
        { x: 100, y: 10 },
        { x: 100, y: 100 },
        { x: 10, y: 100 }
    ]
};

// Draw the path to the offscreen context
const result = drawToOffscreenGraphicsContext(offscreenContext, path);
console.log(result); // Output: false (indicating that drawing was performed)
