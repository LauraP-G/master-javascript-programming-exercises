function getAllWords(str) {
    // your code here
  
   let methodSplit = str.split(" ")
   return methodSplit
    
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
