word.generator
=============

All words are provided by https://raw.githubusercontent.com/dwyl/english-words.

To install:
```sh
npm install word.generator
```

Example of use:

```javascript
const WordGenerator = require("word.generator");
//quantity of words and min length of each word as parameters
console.log(WordGenerator.generate(12, 3));
```

Will always return a object with the words quantity and a sha256 hash for unique check if needed

```javascript
{ words: [ 'antimethodical',
           'assemblagist',
           'coincorporate',
           'disomatous',
           'limean',
           'moralness',
           'paleopicrite',
           'steamie',
           'streamlining',
           'telethermogram',
           'tophetic',
           'wadna' ],
  hash: 'd62c91ae19411cee609b8ea0f9783a370769b968362bbd84e4f661c8252c316e' }
```