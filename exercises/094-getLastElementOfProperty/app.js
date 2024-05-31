// Write your function here
let getLastElementOfProperty = function(obj, key){
    if( !Array.isArray(obj[key]) || obj[key].length == 0 ){
        return undefined;
    }
    return obj[key][obj[key].length-1]
}
let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 