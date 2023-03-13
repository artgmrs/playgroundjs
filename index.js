/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = (ransomNote, magazine) => {
  if (!magazine) return false;

  const arrayRansomNote = ransomNote.split('');
  const arrayMagazine = magazine.split('');

  let remainingLetters = [...arrayRansomNote];

  for (let i = 0; i < arrayRansomNote.length; i++) {
    let existsInMagazine = arrayMagazine.indexOf(arrayRansomNote[i]);

    if (existsInMagazine >= 0) {
      arrayMagazine.splice(i, 1);

      let index = remainingLetters.indexOf(arrayRansomNote[i])
      remainingLetters.splice(index, 1);
    }
  }

  if (Array.isArray(remainingLetters) && !remainingLetters.length) return true;

  return false;
};

const ransom = 'aa';
const magazine = 'aab';
let result = canConstruct(ransom, magazine);

console.log('Result: ', result)