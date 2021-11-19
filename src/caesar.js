// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // input is code to be shifted
    // shift is ammount code is to be shifted or ammount to shift back
    // when encode ===false flip sign of shift
    try{      
      if( shift > 25 || shift < 26 || shift === 0){
        throw "Invalid shift ammount"
      }
      if (encode === false){
        shift = shift * -1;
      }       
      const result = input.toLowerCase();
      for(let i = 0; i < result.length; i++){
        if(result >= 97 && result <= 122){
          if((result.charAt(i)+ shift) >=97 || (result.charCodeAt(i)+ shift )<= 122){

          }else {
            result.charCodeAt(i) = result.charCodeAt(i) + shift;
          }
          
        }
      }
      return result;
    }catch (error){
      return console.log(error);
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
