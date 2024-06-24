let myMap = null; // Dummy value

if (typeof Map !== 'undefined') {
  myMap = new Map();
}

// Now you can safely use `myMap` without encountering a reference error
