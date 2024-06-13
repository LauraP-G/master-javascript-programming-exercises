// Write your function here
function select(array, objeto) {
    let nuevo={};
    array.forEach((element) => {
        if(objeto[element]){
            nuevo[element] = objeto[element]
        }
       
    });
    return nuevo 
}


let array = ['a', 'c', 'e'];
let objeto = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(array, objeto);
console.log(output); // --> { a: 1, c: 3 }