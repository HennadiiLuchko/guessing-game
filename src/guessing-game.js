class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.first = min;
        this.last = max;
    }

    guess() {
        return Math.round((this.first + this.last)/2);
    }

    lower() {
        return this.last =  Math.round((this.first + this.last)/2);
    }

    greater() {
        return this.first =  Math.round((this.first + this.last)/2);
    }
}

module.exports = GuessingGame;
