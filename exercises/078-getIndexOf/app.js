
// Write your function here
let getIndexOf = function(char, string){
    for(let i = 0; i < string.length; i++){
        if(string[i] == char) {
            return i;
        }
        
        }
       
        return -1   
    }


let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2