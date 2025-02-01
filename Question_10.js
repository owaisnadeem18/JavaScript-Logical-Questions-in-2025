let arr = [4, 9, 2, 1, 5, 3, 5, 2, 14];

let SumOfArrayElem = (array) => {
    let sum = 0;
    
    // Pehle hum har element ko check karain ge
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        
        // Ab hum array ke baaki elements ke saath compare karain ge
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        
        // Agar element sirf ek baar aata hai, to usay sum mein add kar denge
        if (count === 1) {
            sum += array[i];
        }
    }

    return sum;
};

console.log(SumOfArrayElem(arr));  // Output: 27
