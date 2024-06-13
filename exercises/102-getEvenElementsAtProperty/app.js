function getEvenElementsAtProperty(obj, key) {
    // your code here
if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
  return [];
}
   return  obj[key].filter((number)=>number % 2 ==0)

   /* let aux =[];
    obj[key].forEach((numero)=>{
      if (numero % 2 ==0){
          aux.push(numero)
      }
     
    })
    return aux;*/
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
