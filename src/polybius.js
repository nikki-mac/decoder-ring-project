// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

//HELPER FUNCTION TO GET COLUMN VALUE IN GRID
function getColumn(letter) {
  let letterVal = alphabet.indexOf(letter) // Get the index value of the letter

  /* For letters "j" and "k", subtract the index value by one, 
  so "i" and "j" are the same value, and k takes "j"'s value, 
  keeping to the given grid format of i/j sharing a value */
    if (letter === 'j' || letter === 'k') {
    letterVal--
    }

  /* If the letter's index value is <= 10, 
  take the modulus of 5 and add 1. 
  For index values > 10, check if the the modulus of 5 is equal to 0.
  If so, change to 5. Otherwise, return the modulus of 5. */
    let column =
    letterVal <= 10 ? (letterVal % 5) + 1 
        : letterVal % 5 === 0 
        ? 5 
        : letterVal % 5
    return column
}

//HELPER FUNCTION TO GET ROW VALUE IN GRID
function getRow(letter) {
  // Get the index value of the letter
    const letterVal = alphabet.indexOf(letter)

  /* Using the letter's index value, check if the modulus of 5 is 0.
  If so, return the rounded down quotient of 5. 
  Otherwise, if there is a remainder, add 1 to the quotient. */
    let row =
    letterVal % 5 === 0
        ? Math.floor(letterVal / 5)
        : Math.floor(letterVal / 5) + 1
    if (letterVal === 0 || letterVal === 5) {
    row += 1
    }
    return row
}

//HELPER FUNCTION TO GET COMPLETE GRID VALUE (COLUMN AND ROW)
function getGridValue(letter) {
    const col = getColumn(letter)
    const row = getRow(letter)
    let num = `${col}${row}`
    return num
}

function polybius(input, encode = true) {
  input = input.toLowerCase() // Create `input` variable to convert all letters in the input argument to lowercase
  let result = '' // create an empty `result` variable for the cipher result
  
  /* If the message is being ENCODED, check each character in the input. 
  If the character is a space, return the space, otherwise return the 
  two-digit code for the letter using `getNum()` function */
  if (encode) {
    for (let characters in input) {
        let character = input[characters]
        result += character === ' ' ? character : getGridValue(character)
    }
  } else {
  // If the message is being DECODED, create an array of the encrypted numbers (input argument)
    const encryptedArray = input.split(' ')
    for (let numbers in encryptedArray) {
      // Get each encrypted word from `encriptionArray`
        let word = encryptedArray[numbers]
      // Figure out if this word is the last word in the array
        const lastWord = encryptedArray[encryptedArray.length - 1]
      // Create a variable to add a space between words if `word` is not the last word in the `encyrptedArray`
        const addSpace = word != lastWord ? true : false
    
      // If the encrypted word value has an odd number of numbers, return false and end the evaluation
        if (word.length % 2 != 0) {
          result = false
          break
        }
    
      /* Otherwise, isolate the first two numbers of the word. 
      If the numbers equal 42, return '(i/j)'...*/
        while (word.length > 0) {
          let wordCharacter = word.substr(0, 2)
          if (wordCharacter == 42) {
            result += '(i/j)'
            word = word.slice(2)
            continue
        }
    /*...Otherwise, go through the alphabet and find out 
      which letter the 2-digit number relates to and add 
      the letter to the resulting string */
        for (let letters in alphabet) {
          // Sort through each letter in the alphabet, obtain its 2-digit code, and compare
            let letter = getGridValue(alphabet[letters])
    
          // Once a match is found, add the letter to the result
            if (letter === wordCharacter) {
              result += alphabet[letters] 
            }
        }
        word = word.slice(2)
        }
        // If the decrypted word was not the last word in the array, add a space
        if (addSpace) result += ' '
    }
  }
  return result
}


return {
  polybius,
}
})()
module.exports = { polybius: polybiusModule.polybius }

