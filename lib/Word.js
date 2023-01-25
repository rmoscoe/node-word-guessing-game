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
        let correct = false;
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guess(char)) {
                this.letters[i].visible = true;
                correct = true;
            }
        }
        return correct;
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
        const wordArr = [];
        this.letters.forEach((char) => {
            wordArr.push(char.toString());
        });
        return wordArr.join(" ");
    }

    getSolution() {
        const letterArr = [];
        this.letters.forEach((char) => {
            letterArr.push(char.char);
        });
        return letterArr.join("");
    }
}

module.exports = Word;
