// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 12

/*Instructional notes: If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
A positive number means shifting to the right whereas a negative number means shifting to the left (i.e., M becomes K).
Spaces should be maintained throughout, as should other nonalphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c). */

const caesarModule = (function () {
  // you can add any code you want within this function scope

 // note to self: will want to use charAt()
  function caesar(input, shift, encode = true) {
    let output = [];
    for (let i = 0; i<input.length, i++){
      const temp = input..toLowerCase().charCodeAt(i) + shift;
      while (temp > 122) {
        temp = (temp - 122) + 96 }
      output.push(string.fromCharCode(temp))
    }
    return output
      
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
