function getLengthOfLongestElement(arr) {
    // Your code here


    aux=0;
    for(elemento of arr){
        if(elemento.length > aux){
            aux=elemento.length
        }
    }
    return aux;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
