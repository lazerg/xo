const cells = document.querySelectorAll('.cell');
let nextStep = 'X';
let isFinished = false;

const setGameStatus = message => {
    document.querySelector('.status').innerText = message;
}

const winLines = [
    // horizontal
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],

    //vertical
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],

    // diagonal
    [ 0, 4, 8 ],
    [ 2, 1, 6 ],
];

const checkWin = () => {
    const win = winLines.find(winLine => {
        const first = cells[winLine[0]].innerText;
        const second = cells[winLine[1]].innerText;
        const third = cells[winLine[2]].innerText;

        return first === second && second === third && third !== '';
    });

    if (!win) {
        return false;
    }

    const winner = nextStep === 'X' ? 'O' : 'X';

    setGameStatus('Game finished !!!, Winner is: ' + winner);
    isFinished = true;
};

const handleClick = cell => {
    if (cell.innerText === '' && !isFinished) {
        cell.innerText = nextStep === 'X' ? 'X' : 'O';
        nextStep = nextStep === 'X' ? 'O' : 'X';
        setGameStatus('Next move: ' + nextStep);
        checkWin();
    } else {
        alert(isFinished ? "O'yin allaqachon tugagan" : "Bu yacheyka allaqachon belgilangan");
    }
};


cells.forEach(cell => {
    cell.addEventListener('click', () => handleClick(cell))
});
