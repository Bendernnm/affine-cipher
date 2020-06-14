const { AffineCipher } = require('./lib');

const affineCipher = new AffineCipher(3, 4);

const word = 'hello';

const decryptedWord = affineCipher.decryptWord(word);
const encryptedWord = affineCipher.encryptWord(decryptedWord);

console.log(`Decrypted word: ${decryptedWord}`);
console.log(`Encrypted word: ${encryptedWord}`);
