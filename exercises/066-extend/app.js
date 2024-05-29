let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here

    for (let element2 in obj2){
        if(element2 in obj1) continue;
        else {
            obj1[element2] = obj2[element2]
            
            
        }
       
    }
    return obj1
  }




extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}