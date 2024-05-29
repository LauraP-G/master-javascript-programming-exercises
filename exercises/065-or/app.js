function or(expression1, expression2) {
  // your code here
return !(!expression1 && !expression2)
  
}

//let output = or(true, false);
//console.log(output); // --> true;
console.log(or(false, false))
console.log(or(false, true))
console.log(or(true, true))
