// no instance => no constructor, just methods

class Result {
    // check if conditions required to determine a winner are fulfilled
    static checkWinner(colors) {
        return (colors[0] === colors[1] && colors[0] === colors[2]) || (colors[0] !== colors[1] && colors[0] !== colors[2] && colors[1] !== colors[2])
    }
    // if user win game, calculate money value
    static moneyWonInGame(win, bid) {
        if (win) return 3 * bid;
        return 0;
    }
}