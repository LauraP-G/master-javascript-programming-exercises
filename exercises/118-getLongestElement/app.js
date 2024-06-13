function getLongestElement(arr) {
    // your code here
    aux="";
  for(let e of arr){
    if(e.length > aux.length)
        aux=e;
  }
  return aux
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
