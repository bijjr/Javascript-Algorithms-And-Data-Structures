// Translate the provided string to pig latin.
//
// Pig Latin takes the first consonant (or consonant cluster)
// of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels


function translatePigLatin(str) {
  let vowels = ['a','e','i','o','u']

  if constant or splice until vowel?
    add to end of word/array

  if first letter = vowel
    concat way to the end

   // str.split('').map((letter) => {
   //    vowels.foreach((item) => {
   //      return letter != item
   //    })
   // })

   return str
}

console.log('\n');
console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california") );
// should return "aliforniacay".
console.log(translatePigLatin("paragraphs") );
// should return "aragraphspay".
console.log(translatePigLatin("glove"));
 // should return "oveglay".
console.log(translatePigLatin("algorithm") );
// should return "algorithmway".
console.log(translatePigLatin("eight"));
// should return "eightway".
console.log('\n');
