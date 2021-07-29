"use strict";
const pl = (word) => {
  //convert to lowercase
  var lword = word.toLowerCase();
  // if word starts with a vowel
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(lword[0])) {
    return lword + "way";
  } else {
    //if the word starts with a consonant
    // make a variable to hold the prefix of the word
    let prefix = "";
    // loop hrough the word until we see a vowel
    for (let i = 0; i < word.length; i++) {
      //if this is a consonant
      if (!vowels.includes(word[i])) {
        prefix += lword[i];
      }
      // else we're on a vowel
      else {
        return lword.slice(i) + prefix + "ay";
      }
    }
  }
};
module.exports = pl;
