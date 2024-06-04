// Write your function here
let getElementsGreaterThan10AtProperty = (obj, key) =>{
    if(!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])){
        return [];
    }
    //opcion una 
  //return obj[key].filter((numero) => numero > 10);


  let aux =[];
  obj[key].forEach((numero)=>{
    if (numero > 10){
        aux.push(numero)
    }
   
  })
  return aux;
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]