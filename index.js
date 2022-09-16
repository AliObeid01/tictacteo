//the Cells is to store who is playing until the end of the game
let cells = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let turn = document.querySelector('.turn');
let btns = document.querySelectorAll('.btn');
let reset=document.querySelector('#reset');
//condtion to handled who will win
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

reset.addEventListener('click', restart);
//loop on each button click
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => game(btn, i));
});

const game = (element, index) => {
    element.value = player;
    element.disabled = true;
    cells[index] = player;
    player = player == 'X' ? 'O' : 'X';
    turn.innerHTML = `Player ${player} Turn`;
//loop to check all the condition posibilty as declared above
    for (let i = 0; i < conditions.length; i++) {
        let condition = conditions[i];
        let cond0 = cells[condition[0]];
        let cond1 = cells[condition[1]];
        let cond2 = cells[condition[2]];

        if (cond0 == '' || cond1 == '' || cond2 == '') {
            continue;
        }
         //if a condition match we get the player winner
        if ((cond0 == cond1) && (cond1 == cond2)) {
            turn.innerHTML = `Player ${cond0} Win`;
            btns.forEach((btn) => btn.disabled = true);
        }
    }
};