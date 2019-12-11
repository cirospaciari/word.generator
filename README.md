word.generator
=============

All words are provided by https://raw.githubusercontent.com/dwyl/english-words.

Support me for future versions:

[![BMC](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/i2yBGw7)

[![PAGSEGURO](https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/209x48-doar-assina.gif)](https://pag.ae/7VxyJphKt)


To install:
```sh
npm install @ciro.spaciari/word.generator
```

Example of use:

```javascript
const WordGenerator = require("@ciro.spaciari/word.generator");
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
