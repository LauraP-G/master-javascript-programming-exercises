// Write your function here
const countAllCharacters = (str) => {
    obj={}
    for(let e of str){
        if(obj[e]){
            obj[e] =obj[e] + 1
        }
        else {
            obj[e] = 1
        }
    }
    return obj;
}
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
