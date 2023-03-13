/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = (ransomNote, magazine) => {
  const ransomNoteArray = ransomNote.split('');
  const magazineArray = magazine.split('');

  for (let i = 0; i < ransomNoteArray.length; i++) {
    const indexInMagazine = magazineArray.indexOf(ransomNoteArray[i]);

    if (indexInMagazine === -1) {
      return false;
    }

    magazineArray.splice(indexInMagazine, 1);
  }

  return true;
};

const ransom = 'aab';
const magazine = 'baa';
let result = canConstruct(ransom, magazine);

console.log('Result: ', result)