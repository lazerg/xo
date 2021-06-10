let nextStep = 'X';

const setGameStatus = message => {
    document.querySelector('.status').innerText = message;
}

const handleClick = cell => {
    if (cell.innerText === ''){
        cell.innerText = nextStep === 'X' ? 'X' : 'O';
        nextStep = nextStep === 'X' ? 'O' : 'X';
        setGameStatus('Next move: ' + nextStep);
    }else{
        alert('Bu yacheyka allaqachon belgilangan');
    }
};

document
    .querySelectorAll('.cell')
    .forEach(cell => {
        cell.addEventListener('click', () => handleClick(cell))
    });
