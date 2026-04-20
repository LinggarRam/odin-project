const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const markSlot = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, markSlot, resetBoard };
})();


const Player = ( name, marker ) => {
    return { name, marker };
};


const GameController = (() => {
    let players = [
        Player("player 1", "X"),
        Player("Player 2", "O")
    ];

    let currentPlayerIndex = 0;
    let isGameOver = false;

    const getCurrentPlayer = () => players[currentPlayerIndex];

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

    const checkWinner = (marker) => {
        return winningCombinations.some((combo) =>
            combo.every((index) => Gameboard.getBoard() [index] === marker)
        );
    };

    const checkTie = () => {
        return Gameboard.getBoard().every((slot) => slot !== "");
    };

    const playTurn = (index) => {
        if (isGameOver) return { status: "GAME OVER" };

        const currentPlayer = getCurrentPlayer();
        const success = Gameboard.markSlot(index, currentPlayer.marker);

        if (!success) return { status: "Invalid" };

        if (checkWinner(currentPlayer.marker)) {
            isGameOver = true;
            return { status: "win", player: currentPlayer };
        }

        if (checkTie()) {
            isGameOver = true;
            return { status: "tie" };
        }

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        return { status: "Continue", player: getCurrentPlayer() };
    };

    const resetGame = (p1Name = "Player 1", p2Name = "Player 2") => {
        players = [Player(p1Name, "X"), Player(p2Name, "O")];
        currentPlayerIndex = 0;
        isGameOver = false;
        Gameboard.resetBoard();
    };

    const getIsGameOver = () => isGameOver;

    return { playTurn, resetGame, getCurrentPlayer, getIsGameOver };
})();

GameController.resetGame("Linggar", "Computer");
console.log("=== Test Game ===");
console.log(GameController.playTurn(0)); // X di slot 0
console.log(GameController.playTurn(3)); // O di slot 3
console.log(GameController.playTurn(1)); // X di slot 1
console.log(GameController.playTurn(4)); // O di slot 4
console.log(GameController.playTurn(2)); // X di slot 2 → X MENANG!
console.log("Board:", Gameboard.getBoard());