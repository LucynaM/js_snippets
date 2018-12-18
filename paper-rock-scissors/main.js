const gameSummary = {
    gamesNumber: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const choices = {
    userChoice: '',
    aiChoice: ''
}

const hands = [...document.querySelectorAll('.select img')];

const handSelection = (e) => {
    hands.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 0 4px red';
    choices.userChoice = e.target.dataset.option;
}

const checkResult = (user, ai) => {
    if (user === ai) {
        gameSummary.draws++;
        return 'Remis';
    } else if ((user === "papier" && ai === "kamień") || (user === "kamień" && ai === "nożyczki") || (user === "nożyczki" && ai === "papier")) {
        gameSummary.wins++;
        return 'Wygrałeś';
    } else {
        gameSummary.losses++;
        return 'Przegrałeś';
    }
}

const publishResult = (result) => {
    document.querySelector('.numbers span').textContent = gameSummary.gamesNumber;
    document.querySelector('.wins span').textContent = gameSummary.wins;
    document.querySelector('.draws span').textContent = gameSummary.draws;
    document.querySelector('.losses span').textContent = gameSummary.losses;
    document.querySelector('[data-summary="your-choice"]').textContent = choices.userChoice;
    document.querySelector('[data-summary="ai-choice"]').textContent = choices.aiChoice;
    document.querySelector('[data-summary="who-win"]').textContent = result;
}

const runGame = (e) => {
    e.preventDefault();
    gameSummary.gamesNumber++;
    choices.aiChoice = hands[Math.floor(Math.random() * 3)].dataset.option;
    const result = checkResult(choices.userChoice, choices.aiChoice);
    publishResult(result);
}



hands.forEach(hand => hand.addEventListener('click', handSelection))
document.querySelector('.start').addEventListener('click', runGame);