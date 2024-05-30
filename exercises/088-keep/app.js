// Write your function here
function keep(arr, element){
return arr.filter((elemento) => elemento == element);
}
let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]