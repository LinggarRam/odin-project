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

const DisplayController = (() => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status-text");

    const renderBoard = () => {
        const board = Gameboard.getBoard();
        cells.forEach((cell, index) => {
            cell.textContent = board[index];
            cell.className = "cell";
            if (board[index] === "X") cell.classList.add("x", "taken");
            if (board[index] === "O") cell.classList.add("o", "taken");
        });
    };

    const updateStatus = (text) => {
        statusText.textContent = text;
    };

    const initBoard = () => {
        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                if (cell.classList.contains("taken") || GameController.getIsGameOver()) return;

                const index = parseInt(cell.dataset.index);
                const result = GameController.playTurn(index);

                renderBoard();

                if (result.status === "win") {
                    updateStatus(`🏆 ${result.player.name} Wins!`);
                    statusText.style.color = result.player.marker === "X" ? "#e94560" : "#4ecca3";
                } else if (result.status === "tie") {
                    updateStatus("🤝 It's a Tie");
                    statusText.style.color = "#f0b429";
                } else if (result.status === "continue") {
                    updateStatus(`${result.player.name}'s Turn (${result.player.marker})`);
                    statusText.style.color = result.player.marker === "X" ? "#e94560" : "#4ecca3";
                }
            });
        });
    };

    return { renderBoard, updateStatus, initBoard };
})();

GameController.resetGame("Player 1", "Player 2");
DisplayController.initBoard();
DisplayController.updateStatus("Player 1's Turn (X)");