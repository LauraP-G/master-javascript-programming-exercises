function getSumOfAllElementsAtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return 0;
    }
/*return obj[key].reduce((anterior, actual) => anterior + actual, 0);*/

  let suma=0;
  for(let e of obj[key]){
    suma+=e
  }
  return suma
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
