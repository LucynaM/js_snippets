// One instance for browser session

class Wallet {
    constructor(money) {
        // money as private attribute
        let _money = money;
        // money getter
        this.getWalletValue = () => _money;
        // money setter
        this.setWalletValue = (changeValue, i = 1) => {
            if (typeof value === 'number' && !(isNaN(value))) {
                _money += changeValue * i;
            } else {
                throw new Error('Invalid number');
            }
        }
    }
    // check if user has enough money to play
    checkCanPlay(bid) {
        return this.getWalletValue() >= bid;
    }
}