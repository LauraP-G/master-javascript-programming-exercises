let getOddLengthWordsAtProperty = (obj, key) => {
    if(!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])){
        return []
    }

    return obj[key].filter((word) => word.length % 2 != 0)
}


let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
