// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

function caesar(input, shift, encode = true) {
  // Create a "input" variable to convert all letters in the input to lowercase, and an alphabet array
  input = input.toLowerCase()
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  // create a mutatable variable for the resulting input and a temp variable for the index locator
  let result = ""
  let newIndex = 0

  // If the shift value is equal to 0, not present, less than -25, or greater than 25, return false.
  if (shift === 0 || shift === undefined || shift < -25 || shift > 25) {
      return false
  }
  
  // For every character in the input...
  for(let characters in input) {
      let character = input[characters]
      // ...compare each character in the input to a letter in the alphabet array
      alphabet.find(letter => {
          if (letter === character) {
              // add or subtract shift amount to alphabet letter's index number and assign value to newIndex
              encode ? newIndex = alphabet.indexOf(letter) + shift : newIndex = alphabet.indexOf(letter) - shift
              // if the newIndex value is 26 or above, subtract that value by 26
              if (newIndex >= 26) {
                  newIndex -= 26
              // if the newIndex value is negative, add 26
              } else if (newIndex <= -1) {
                  newIndex += 26 
              }
              // add the letter to the resulting string
              result += alphabet[newIndex]
          }
      })
      // If the character is not a letter (index = -1), add character to result
      if (alphabet.indexOf(character) === -1) {
        result += character
      }
  }
  // Return the resulting array
  return result
}

return {
  caesar,
}
})()

module.exports = { caesar: caesarModule.caesar }
