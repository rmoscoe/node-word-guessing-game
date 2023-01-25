class Letter {
    constructor(char) { 
        this.char = char;
        // this.visible = true;
        
        this.visible = (/^[a-z0-9]$/i).test(char) ?  false :  true;
       
    }

    toString() {
        // this.visible ? return this.char : return "_";
        if(this.visible) {
            return this.char;
        } else {
            return "_";
        }
    }

    guess(input) {
       return input.toLowerCase() === this.char.toLowerCase();
    }

    getSolution() {
        return this.char;
    }

}


module.exports = Letter;
