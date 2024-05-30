function addToFrontOfNew(arr, element) {
    // your code here
    let newArray = [element, ...arr];
    return newArray;


/*
    let newArr =[];
 for(let number of arr){
    newArr.push(number)

 }
 newArr.unshift(element)
 return newArr*/
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
