function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length == 0){ return 0}
  aux=1;
  for(let e of arr){
    aux *= e
  }
  return aux
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
