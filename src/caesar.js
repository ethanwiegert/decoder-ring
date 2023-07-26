// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//use codePointAt() for input and fromCodePoint() to output, add to the codepoint the value of the shift for each index and then use fromCodePoint()


const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //check the value of the shift
    if (shift===0||shift>25||shift<-25){return false}
    //create variable to hold string
    if (encode){
    let encoded=""
    //ignore the capital letters
    let sentence=input.toLowerCase()
    //maintain spaces and characters(outside of 97-122)
    for (let i=0; i<sentence.length; i++){
      if (sentence.codePointAt(i)<=96||sentence.codePointAt(i)>=123){encoded+=sentence[i]}
      else{
        let code=0
        code=sentence.codePointAt(i)+shift
        if (code>122){code-=26}
        if (code<97){code+=26}
        encoded+=String.fromCodePoint(code)
      }
    }
    return encoded
  }
    //shift and account for off alphpabet
    //return the shifted sentence
    //reverse the shift for encode false
    //return the string
    if (encode===false){
      let encoded=""
      //ignore the capital letters
      let sentence=input.toLowerCase()
      //maintain spaces and characters(outside of 97-122)
      for (let i=0; i<sentence.length; i++){
        if (sentence.codePointAt(i)<=96||sentence.codePointAt(i)>=123){encoded+=sentence[i]}
        else{
          let code=0
          code=sentence.codePointAt(i)-shift
          if (code>122){code-=26}
          if (code<97){code+=26}
          encoded+=String.fromCodePoint(code)
        }
      }
      return encoded
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
