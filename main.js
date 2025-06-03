/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += 'x';
  }
  return result;
}

function yellingChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + '!';
  }
  return result;
}

function indexedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += i + str[i];
  }
  return result;
}

function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += `(${i + 1})` + str[i];
  }
  return result;
}

function exclaim(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '?' || str[i] === '.') {
      result += '!';
    } else {
      result += str[i];
    }
  }
  return result;
}

function repeatIt(str, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

function truncate(str) {
  if (str.length > 18) {
    let result = '';
    for (let i = 0; i < 15; i++) {
      result += str[i];
    }
    return result + '...';
  } else {
    return str;
  }
}

function emailify(str) {
  let first = '';
  let last = '';
  let spaceFound = false;
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase();
    if (c === ' ') {
      spaceFound = true;
    } else if (!spaceFound) {
      first += c;
    } else {
      last += c;
    }
  }
  return first[0] + last + '.prsvr@gmail.com';
}

function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function onlyVowels(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      result += str[i];
    }
  }
  return result;
}

// Stretch Goals

function crazyCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += i % 2 === 0
      ? str[i].toLowerCase()
      : str[i].toUpperCase();
  }
  return result;
}

function titleCase(str) {
  let result = '';
  let newWord = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += str[i];
      newWord = true;
    } else {
      result += newWord
        ? str[i].toUpperCase()
        : str[i].toLowerCase();
      newWord = false;
    }
  }
  return result;
}

function camelCase(str) {
  let result = '';
  let newWord = false;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c === ' ') {
      newWord = true;
    } else {
      result += newWord ? c.toUpperCase() : c.toLowerCase();
      newWord = false;
    }
  }
  return result;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c === ' ') {
      result += c;
    } else {
      result += count % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
      count++;
    }
  }
  return result;
}

module.exports = {
  xify,
  yellingChars,
  indexedChars,
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
};




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
