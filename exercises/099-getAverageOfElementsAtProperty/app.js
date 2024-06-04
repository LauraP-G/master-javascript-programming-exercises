function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key]==0 || !Array.isArray(obj[key])){
    return 0;
  }
  /* opcion 1
  let average = 0;
   for(let number of obj[key]){
    average += number
   }

return average / obj[key].length;
*/

  let average = 0;
   obj[key].forEach((number)=>{
    average += number
  })
return average/ obj[key].length;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  