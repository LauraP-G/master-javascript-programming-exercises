function getAllLetters(str) {
    // your code here
    let arrLetter =[];
    if(str.length == 0) return arrLetter;
    for(let letter of str){
        arrLetter.push(letter)
    }
return arrLetter
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
