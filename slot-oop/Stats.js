// one instance for browser session

class Stats {
    constructor() {
        // attribute that stores basic information about game in form of list of objects [{win: bool}, {bid: number}] 
        this.gameResults = [];
    }
    addGameToStats(win, bid) {
        // add single game information 
        this.gameResults.push({
            win,
            bid // shorten for {win:win, bid:bid} when key-name is the same as value-name, ES6
        });
    }
    showGameStats() {
        // show gamesNumber, winsNumber, lossesNumber
        const gamesNumber = this.gameResults.length;
        const winsNumber = this.gameResults.filter(result => result.win).length;
        const lossesNumber = gamesNumber - winsNumber;
        return [gamesNumber, winsNumber, lossesNumber]
    }
}

const stats = new Stats();