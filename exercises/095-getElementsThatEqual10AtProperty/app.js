// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    
        return []
    }
    
    let newArrTen = []
    obj[key].forEach(element => {

    if (element == 10){
        newArrTen.push(element)
    }


})
return newArrTen;

}
let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]
