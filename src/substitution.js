// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // ignore capital letters, maintain spaces
    //alphabet must be 26 characters, must be unique
    //check alphabet is 26 characters, return false
    if (!alphabet){return false}
    if (alphabet.length<26||alphabet.length>=27){return false}
    //itterate through to check that each character is unique
    //All the characters in the alphabet parameter must be unique. Otherwise, it should return false
    //slice and includes
    let alphabetArr=[]
    for (let i=0; i<alphabet.length; i++){
      alphabetArr.push(alphabet[i])
     }
     let rearrangedAlphabet=alphabetArr.sort()
     for (let i=0; i<rearrangedAlphabet.length; i++){
      if (rearrangedAlphabet[i]===rearrangedAlphabet[i+1]){return false}
     }
   
   
    let message=input.toLowerCase()
    //write encoded portion
    if(encode){
    //set letter values of inputs to digits starting at 0
    //match the value to the place of the alphabet
    //return the new message
    let encoded=""
    for(let i=0; i<message.length; i++){
      
      if (message[i]===" "){encoded+=" "}else{
      let indexValue=message.codePointAt(i)-97
      encoded+=alphabet[indexValue]
    }
    }
    return encoded
    }

    if(encode===false){
      //maintain spaces, inverse the index, find the string value
      let decoded=""
      for(let i=0; i<message.length; i++){
        if (message[i]===" "){decoded+=" "}
        for (let k=0; k<alphabet.length; k++){
        let indexValue=k+97
        
        if(message[i]===alphabet[k]){
        decoded+=String.fromCodePoint(indexValue)
      }
      
      
      }
    }
    return decoded
  }
}
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };