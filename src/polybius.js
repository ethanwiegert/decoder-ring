// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //11-55, 42 is i and j
    //only spaces and letters included
    //output is string encoding
    //when decoding number of characters in string has to be even otherwise return false
    //spaces maintained
    //ignore capital letters
    //i and j share 42 encoding, decoding both need to be shown somehow
    if(encode){
      let encoded=''
      let inputLower=input.toLowerCase()
      for (let i=0; i<inputLower.length; i++){
        if (inputLower[i]===" "){encoded+=" "} 
        else if (inputLower[i]==='i'||inputLower[i]==='j'){encoded+='42'}
        else {
          let collumn=((inputLower.codePointAt(i)-97)%5)+1
          let row=parseInt((inputLower.codePointAt(i)-97)/5)+1
          //condition for above i/j
          if (inputLower.codePointAt(i)>106){collumn-=1}
          encoded+=`${collumn}${row}`
        }


      }
      return encoded
    }

    if (encode===false){
      //test to see that even number of numbers was provided
      let justNumbers=''
      for (let j=0; j<input.length; j++){
        if (input[j]!==" "){justNumbers+=input[j]}
      }
      if (justNumbers.length/2!=parseInt(justNumbers.length/2)){return false}
      //if even decode
      let decode=""
      for (let i=0; i<input.length; i+=2){
        if (input[i]===" "){decode+=" "; i++}
          let collumn=Number(input[i])
          let row=Number(input[i+1])
          let textPosition=(((row-1)*5+collumn+96))
          if (textPosition>106){textPosition=(((row-1)*5+collumn+96+1))}
          //condition for i/j
          if (collumn===4&&row===2){decode+='(i/j)'}
        
          decode+=`${String.fromCodePoint(textPosition)}`
          

        


      }
      
      return decode
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
