class Game {
    constructor(startMoney) {
        // instances of classes Wallet and Stats
        this.wallet = new Wallet(startMoney);
        this.stats = new Stats();
        // add event listener for click event to start game
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        // DOM elements to be processed
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.colorBoards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGamesNumber = document.querySelector('.score span.number');
        this.spanWinsNumber = document.querySelector('.score span.win');
        this.spanLossesNumber = document.querySelector('.score span.loss');
        // render method with default values
        this.render()
    }

    render(result = "", wonMoney = 0, bid = 0, stats = [0, 0, 0], colors = ['red', 'green', 'blue']) {
        // update DOM elements according to game results
        this.spanWallet.textContent = this.wallet.getWalletValue();
        if (result) {
            result = `Wygrałeś ${wonMoney - bid}$. `;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$. `
        }
        this.spanResult.textContent = result;
        this.spanGamesNumber.textContent = stats[0];
        this.spanWinsNumber.textContent = stats[1];
        this.spanLossesNumber.textContent = stats[2];
        this.colorBoards.forEach((board, index) => {
            board.style.backgroundColor = colors[index]
        });
        this.inputBid.value = "";
    }

    startGame() {
        // run game
        if (this.inputBid.value < 1) return alert('Kwota, którą chcesz postawić jest za mała');
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) return alert('Nie masz wystarczających środków, by postawić taką kwotę');

        this.wallet.setWalletValue(bid, -1);
        this.draw = new Draw();
        const colors = this.draw.getResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWonInGame(win, bid);
        this.wallet.setWalletValue(wonMoney);
        this.stats.addGameToStats(win, bid);
        // render method with game values
        this.render(win, wonMoney, bid, this.stats.showGameStats(), colors);
    }
}