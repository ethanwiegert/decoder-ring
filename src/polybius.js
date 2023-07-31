// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(encode){
      let encoded=''
      //ignore capital letters
      let inputLower=input.toLowerCase()
      for (let i=0; i<inputLower.length; i++){
        //spaces are maintained
        if (inputLower[i]===" "){encoded+=" "} 
        //create special condition for i and j
        else if (inputLower[i]==='i'||inputLower[i]==='j'){encoded+='42'}
        else {
          let collumn=((inputLower.codePointAt(i)-97)%5)+1
          let row=parseInt((inputLower.codePointAt(i)-97)/5)+1
          //condition for if past i and j to account for the shift
          if (inputLower.codePointAt(i)>106){
            if (collumn===1){collumn=5; row=row-1}
            else{collumn=collumn-1}
            
          }
          //add the number created for each letter
          encoded+=`${collumn}${row}`
        }


      }
      //return the message
      return encoded
    }

    if (encode===false){
      //test to see that even number of numbers was provided, if not return false
      let justNumbers=''
      for (let j=0; j<input.length; j++){
        if (input[j]!==" "){justNumbers+=input[j]}
      }
      if (justNumbers.length/2!=parseInt(justNumbers.length/2)){return false}
      //if even proceed to decoding
      let decode=""
      for (let i=0; i<input.length; i+=2){
        //create an exception for when there are spaces present to go to the next number
        if (input[i]===" "){decode+=" "; i++}
        //store row and column values
          let collumn=Number(input[i])
          let row=Number(input[i+1])
          //create case for i and j
          if (collumn===4&&row===2){decode+='(i/j)'}else{
            //inverse the collumn and row to find the ASCII value of the number pair
          let textPosition=(((row-1)*5+collumn+96))
          //create case for where in the polybius square the letters were past i and j
          if (textPosition>106){textPosition=(((row-1)*5+collumn+96+1))}
          
        //translate the ASCII value to the letter and add it to the decoded string variable
          decode+=`${String.fromCodePoint(textPosition)}`}
          

        


      }
      //return the decoded message
      return decode
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
