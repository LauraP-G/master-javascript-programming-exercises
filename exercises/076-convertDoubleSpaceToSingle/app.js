function convertDoubleSpaceToSingle(str) {
    // your code here
    let newArr = str.split('  ').join(' ')
     
     return newArr
  
 
  

    
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
