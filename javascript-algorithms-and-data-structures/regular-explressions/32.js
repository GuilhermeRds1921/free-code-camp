let str = "one two three";
let fixRegex = /^(\D+)\s(\D+)\s(\D+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result);