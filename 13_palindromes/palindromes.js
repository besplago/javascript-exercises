const palindromes = function (word) {
  // Removes spaces and punctuation marks
  const cleanString = word
    .replace(/[\s\p{P}]+/gu, match => (match === '_' ? '_' : ''))
    .toLowerCase()
  const reversedCleanString = cleanString.split('').reverse().join('')
  return cleanString === reversedCleanString
}

// Do not edit below this line
module.exports = palindromes
