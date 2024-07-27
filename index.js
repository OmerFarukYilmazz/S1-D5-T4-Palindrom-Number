function isPalindrom(word) {
  /* kodlar buraya */
  let reverse = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i].toLowerCase();
  }
  if (reverse == word.toLowerCase()) {
    return true;
  }
  return false;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = isPalindrom;
