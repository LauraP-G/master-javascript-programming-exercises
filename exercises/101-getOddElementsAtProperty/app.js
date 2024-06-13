function getOddElementsAtProperty(obj, key) {
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return []
  }
    // your code here
  return obj[key].filter((number) => number % 2 != 0)
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
