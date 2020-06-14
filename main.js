const { AffineCipher } = require('./lib');

const affineCipher = new AffineCipher(3, 4);

const word = 'privatekey';

const encryptedWord = affineCipher.encryptWord(word);
const decryptedWord = affineCipher.decryptWord(encryptedWord);

console.log(`Encrypted word: ${encryptedWord}`);
console.log(`Decrypted word: ${decryptedWord}`);
