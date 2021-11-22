// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function encoder(input) {
    const orig = input.toLowerCase();
    let code = "";
    for (let i = 0; i < orig.length; i++) {
      //statement used to encode 
      switch (orig.charAt(i)) {
        case "a":
          code += "11";
          break;
        case "b":
          code += "21";
          break;
        case "c":
          code += "31";
          break;
        case "d":
          code += "41";
          break;
        case "e":
          code += "51";
          break;
        case "f":
          code += "12";
          break;
        case "g":
          code += "22";
          break;
        case "h":
          code += "32";
          break;
        case "i":
        case "j":
          code += "42";
          break;
        case "k":
          code += "52";
          break;
        case "l":
          code += "13";
          break;
        case "m":
          code += "23";
          break;
        case "n":
          code += "33";
          break;
        case "o":
          code += "43";
          break;
        case "p":
          code += "53";
          break;
        case "q":
          code += "14";
          break;
        case "r":
          code += "24";
          break;
        case "s":
          code += "34";
          break;
        case "t":
          code += "44";
          break;
        case "u":
          code += "54";
          break;
        case "v":
          code += "15";
          break;
        case "w":
          code += "25";
          break;
        case "x":
          code += "35";
          break;
        case "y":
          code += "45";
          break;
        case "z":
          code += "55";
          break;
        case " ":
          code += " ";
          break;
        default:          
          return false;          
      }
    }
    return code;
  }

  function decoder(input) {
    const code = input;
    let orig = "";

    let lengthCheck = code.split(" ");
    let newLengthCheck = "";

    //checking for even number of characters excluding spaces
    for (let i = 0; i < lengthCheck.length; i++) {
      newLengthCheck += lengthCheck[i];
    }
    if (newLengthCheck.length % 2 != 0) {
      return false;
    }    
    // switch statement to decode with
    for (let i = 0; i < code.length; i++) {
      switch (code.slice(i, i + 2)) {
        case "11":
          orig += "a";
          i++;
          break;
        case "21":
          orig += "b";
          i++;
          break;
        case "31":
          orig += "c";
          i++;
          break;
        case "41":
          orig += "d";
          i++;
          break;
        case "51":
          orig += "e";
          i++;
          break;
        case "12":
          orig += "f";
          i++;
          break;
        case "22":
          orig += "g";
          i++;
          break;
        case "32":
          orig += "h";
          i++;
          break;
        case "42":
          orig += "i/j";
          i++;
          break;
        case "52":
          orig += "k";
          i++;
          break;
        case "13":
          orig += "l";
          i++;
          break;
        case "23":
          orig += "m";
          i++;
          break;
        case "33":
          orig += "n";
          i++;
          break;
        case "43":
          orig += "o";
          i++;
          break;
        case "53":
          orig += "p";
          i++;
          break;
        case "14":
          orig += "q";
          i++;
          break;
        case "24":
          orig += "r";
          i++;
          break;
        case "34":
          orig += "s";
          i++;
          break;
        case "44":
          orig += "t";
          i++;
          break;
        case "54":
          orig += "u";
          i++;
          break;
        case "15":
          orig += "v";
          i++;
          break;
        case "25":
          orig += "w";
          i++;
          break;
        case "35":
          orig += "x";
          i++;
          break;
        case "45":
          orig += "y";
          i++;
          break;
        case "55":
          orig += "z";
          i++;
          break;
        default:
          if(code.charAt(i) === " "){
            orig += " ";
          } else {
            return false;
          }
          break;
      }
    }
    return orig;
  }

  function polybius(input, encode = true) {
    // your solution code here
    if (!encode) {
      return decoder(input);
    } else {
      return encoder(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
