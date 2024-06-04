function getEvenLengthWordsAtProperty(obj, key) {
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }
    // your code here
    return obj[key].filter((word) => word.length % 2 == 0)
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
