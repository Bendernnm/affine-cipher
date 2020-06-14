const defaultDictionary = require('./dictionary');

function inverseKey(a, m) {
  for (let i = 0; i < m; i += 1) {
    if (i * a % m === 1) {
      return i;
    }
  }

  throw Error('Can\'t decrypt');
}

class AffineCipher {
  constructor(a, b, dictionary = defaultDictionary) {
    this.a = a;
    this.b = b;
    this.m = dictionary.length;
    this.dictonary = dictionary;
  }

  encryptLetter(letter) {
    const codeOfLetter = this.dictonary.letterKey.get(letter);

    const codeOfDecryptedLetter = (this.a * codeOfLetter + this.b) % this.m;

    return this.dictonary.numberKey.get(codeOfDecryptedLetter);
  }

  decryptLetter(letter) {
    const inverseA = inverseKey(this.a, this.m);

    const codeOfDecryptedLetter = this.dictonary.letterKey.get(letter);

    const code = inverseA * (codeOfDecryptedLetter + this.m - this.b) % this.m;

    return this.dictonary.numberKey.get(code);
  }

  encryptWord(word) {
    let encryptedWord = '';

    for (const letter of word) {
      encryptedWord += this.encryptLetter(letter);
    }

    return encryptedWord;
  }

  decryptWord(word) {
    let decryptedWord = '';

    for (const letter of word) {
      decryptedWord += this.decryptLetter(letter);
    }

    return decryptedWord;
  }
}

module.exports = AffineCipher;
