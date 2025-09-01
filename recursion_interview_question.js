// Print numbers from 0 to 100 without using any loop

const NumPrinter = (num) => {
    console.log(num); // Print the current number
    
    // Recursive condition (stops at 100)
    if (num < 100) {
        NumPrinter(num + 1); // Call the same function with next number
    }
};

// Start from 0
NumPrinter(0);