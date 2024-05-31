// Write your function here
function removeElement(arr, parametro){
    return arr.filter((element) => element != parametro )
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
