const Letter = require("./Letter");

class Word {
    constructor(str) {
        const lettersArr = [];
        for (let i = 0; i < str.length; i++) {
            const letter = new Letter(str[i]);
            lettersArr.push(letter);
        }
        this.letters = lettersArr;
    }

    guessLetter(char) {
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].char === char) {
                this.letters[i].visible = true;
                return true;
            }
        }
        return false;
    }

    guessedCorrectly() {
        for (let i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].visible) {
                return false;
            }
        }
        return true;
    }

    toString() {
        this.letters.forEach((char) => {
            char.toString();
        });
    }
}

module.exports = Word;
