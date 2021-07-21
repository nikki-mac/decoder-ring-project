// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const cipher = []

  function substitution(input, alphabet, encode = true) {
  //create an object from alphabet argument characters that does not contain repeats
    const noRepeats = new Set(alphabet)
    /* if the alphabet argument is undefined, 
    contains less than 26 characters, or contains 
    repeats(making `checkForRepeats` < 26), 
    function should return false */
    if (alphabet === undefined || alphabet.length < 26 || [...noRepeats].length < 26) {
      return false
    }

    alphabet.split("")// creates an array of characters from alphabet argument
    if (encode) { 
      //if ENCODING, assigns given alphabet to `standardAlphabet` characters 
      for (let i = 0; i < 26; i++) {
        cipher[standardAlphabet[i]] = alphabet[i]
      }
    } else {
      //if DECODING, assigns `standardAlphabet` to given alphabet characters
      for (let i = 0; i < 26; i++) {
        cipher[alphabet[i]] = standardAlphabet[i]
      }
    }
    /*create a final encoded or decoded array of characters
    from input argument. Input argument is converted to lowercase 
    and split into singular characters. If the input contains 
    spaces (" "), those spaces are maintained. */
    let answer = input.toLowerCase().split("").map((letter) => { //creates array, splits input and coverts to lowercase
      if (letter === " ") return " " //maintains spaces in input argument
      return cipher[letter] //returns an array of encoded/decoded characters
    })
    return answer.join("") //returns a string of encoded/decoded message
  }

  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }