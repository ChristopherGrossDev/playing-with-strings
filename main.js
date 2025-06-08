/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
  let result =""; 
  
  for(let i =0; i < str.length; i++){
    result+= "x";
  }
  return result;
}

console.log(xify("hello"));
console.log(xify("hi there"));

function yellingChars(str){
  let result ="";

  for(let i =0; i <str.length; i++){
    result += str[i] + "!";
  }

  return result;
}

console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

function indexedChars(str){
  let result = "";

  for (let i = 0; i < str.length; i++){
    result += i + str[i];
  }
  return result;
} 

console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

function numberedChars(str){
  let result = "";

  for (let i =0; i < str.length; i++){
    result += "("+(i + 1) + ")" +str[i];
  }

  return result;
}

console.log(numberedChars("hello"));
console.log(numberedChars("bye"));

function exclaim(str){
  let result = "";

  for (let i = 0; i < str.length; i++){
    if (str[i] === "." || str[i] === "?"){
      result += "!";
    }else {
      result += str[i];
    }
  }

  return result;
}

console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine?"));

function repeatIt(str, n){
  let result = "";

  for (let i = 0; i < n; i++){
    result += str;
  }

  return result;
}

console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));

function truncate(str){
  let result = "";

  for (let i = 0; i <15 && i <str.length; i++){
    result += str[i];
  }

  if (str.length > 15){
    result += "...";
  }
  return result;
}

console.log(truncate("The fault, dear Brutus, is not our stars, but in ourselves."));
console.log(truncate("Well, thats just, like, your opinion man."))

function emailify(name){
  let first = "";
  let last = "";
  let spaceFound = false;

  for (let i = 0; i < name.length; i++){
    if (name[i] === " "){
      spaceFound = true;
    }else if (!spaceFound){
      first += name[i].toLowerCase();
    }else{
      last += name[i].toLowerCase();
    }
    }
    
    let email = first[0] + last + ".prsvr@gmail.com";
    return email;
  }


console.log(emailify("chris gross"));
console.log(emailify("james gross"));

function reverse(str){
  let result = "";

  for (let i = str.length -1; i >= 0; i--){
    result += str[i];
  }

  return result;
}

console.log(reverse("chris"));
console.log(reverse("gross"));

function onlyVowels(str){
  let result = "";
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      result += str[i];
    }
  }

  return result;
}

console.log(onlyVowels("chris gross"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("james gross"))








 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
