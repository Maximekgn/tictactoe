const players = ["X", "O"];
let currentPlayer = players[Math.floor(Math.random() * 2)];
let winner = false;
const cells = document.querySelectorAll(".cell");
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWin = () => {
    winningCombinations.forEach((combination) => {
        const [a, b, c] = combination;
        if (
            cells[a].innerHTML == currentPlayer &&
            cells[b].innerHTML == currentPlayer &&
            cells[c].innerHTML == currentPlayer
        ) {
            alert("Winner is " + currentPlayer);
            winner = true;
            location.reload();
        }
    });
};

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        checkWin();
        if ( ! winner)
        {
            if (cell.innerHTML == " ") {
                cell.innerHTML = currentPlayer;
                checkWin();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            } else {
                alert("Already filled");
            }
        }
    });
});

