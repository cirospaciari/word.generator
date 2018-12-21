
const words = require("./words.json");
const sha256 = require("crypto-js/sha256");
const hexEncode = require("crypto-js/enc-hex");
const cached_filtered_words = {};

class  WordGenerator{
    static generate(quantity, min_length){
        min_length = min_length || 2;
        cached_filtered_words[min_length] = cached_filtered_words[min_length] || words.filter(w => w.length >= min_length);

        let possible_words = cached_filtered_words[min_length];

        let response = { words: new Array(quantity), hash: "" };
        let indexes = new Array(quantity);
        for(let i = 0; i < quantity; i++){
            while(true){
                let index = Math.floor(Math.random() * (possible_words.length - 1 + 1)) - 1;
                if(indexes.some(v => v == index))
                    continue;

                response.words[i] = possible_words[index];
                indexes[i] = index;
                break;
            }
        }
        response.words.sort();
        indexes.sort();
        response.hash = sha256(indexes.join(";")).toString(hexEncode);

        return response;
    }   
}

module.exports = WordGenerator;