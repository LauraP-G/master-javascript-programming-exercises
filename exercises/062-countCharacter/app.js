function countCharacter(str, char) {
    // your code here
let aux=0;
for(let character of str){
    if(character == char){
        aux++
    }
}
return aux
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
