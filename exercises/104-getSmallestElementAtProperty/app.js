function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
      return []
    }
  
  
    return Math.min(...obj[key]);



  /*Option B
  let aux= Infinity;
  for(number of obj[key]){
    if(number< aux ){
      aux = number
    }
  }
return aux*/
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
