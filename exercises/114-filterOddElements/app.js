function filterOddElements(arr) {
  // your code here
   let impar = arr.filter((e) => e % 2 !=0)
   return impar;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
