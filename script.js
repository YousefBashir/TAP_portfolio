// Q2: java script 
//   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function addFuncIndices(arr, target) {
    // entering the arry with first element
    for (let numF = 0; numF < arr.length; numF++) {
        // entering the array with another element in same array
        for (let numS = numF + 1; numS < arr.length; numS++) {
            // cheeck if the numbers value equal the target(the num you provide)
            if (arr[numF] + arr[numS] === target) {
                // if true return the numbers as an array
                return [numF, numS];
            }
            
        }
    }
};
// simple example to show result
let numbers = [2,7,11,15];
let target =26;
// print the result in console
console.log(addFuncIndices(numbers, target)); 