// Write your function here
let computeAverageOfNumbers = (arr) => {
    let averageArr = 0;
    if(arr.length == 0) return 0;
    for (let element of arr){
        averageArr += element

    }
    return averageArr / arr.length
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3