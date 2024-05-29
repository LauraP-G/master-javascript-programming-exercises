let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for(let propiedad in obj){
        if (obj[propiedad] > num){
            delete obj[propiedad];
           
        }
    }
    return obj;
    
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }