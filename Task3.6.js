// Palindrome
// Ask the user to give a string and then check if it’s a palindrome
// (a word, phrase, or sequence that reads the same backwards
// as forwards, e.g. madam or nurses run) or not. Use while loops to
// solve this

process.stdout.write('Please enter a string to check if it is a palindrome: ');
process.stdin.on('data', function (input) {
  let string = input.toString().trim().toLowerCase();
  let stringIndex = --string.length;
  let palindromeCheck = [];
  // let stringStartIndex = 0
  for (let i = 0; i < stringIndex; i++) {
    console.log(string[i])
    console.log(stringIndex)
    for (let j = 0; j < stringIndex; j++) {
      console.log(string)
      
    }
    // if (string[i] === string[stringEndIndex]) {
    //   console.log('yes')
    // } else {
    //   console.log('no')
    // }
  }
  // if (string[0] === string[stringIndex]) {
  //   console.log(string[0] + '\n' + string[stringIndex]);
  // }
//  console.log(string[stringIndex]);
  
  process.exit();
})