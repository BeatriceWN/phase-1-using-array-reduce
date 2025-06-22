const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//.reduce() takes two arguments: a callback function that receives an accumulator (total) and the current value (batch)
//an initial value for the accumulator set to 0
//it loops through each item in the array, adds it to the total, and finally returns the sum
const totalBatteries = batteryBatches.reduce (function(total, batch) { 
    return total + batch;
}, 0);
console.log(totalBatteries); // prints 31