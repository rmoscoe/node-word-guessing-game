class Letter {
    constructor(char) { 
        this.char = char;
        // this.visible = true;
        
        this.visible = /^[a-zA-Z0-9]$/.test(char) ?  false :  true;
       
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
       return input === this.char.toUpperCase() || input ===  this.char.toLowerCase();
    }

    getSolution() {
        return this.char;
    }

}


module.exports = Letter;
