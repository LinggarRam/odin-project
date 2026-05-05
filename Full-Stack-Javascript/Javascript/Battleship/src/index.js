import "./styles.css";
import Player from "./Player.js";
import UI from "./UI.js";

let humanPlayer, computerPlayer;
let isPlayerTurn = true;
let gameActive = false;
let currentShipIndex = 0;
let placedShips = [];
let orientation = "horizontal";
let setupBoard;

const createSetupBoard = () => {
  const existing = document.getElementById("setup-board");
  if (existing) existing.remove();

  const boardEl = document.createElement("div");
  boardEl.id = "setup-board";
  boardEl.classList.add("board");

  document.querySelector(".setup-phase").appendChild(boardEl);
  return boardEl;
};

const initSetup = () => {
  humanPlayer = new Player("human");
  computerPlayer = new Player("computer");
  isPlayerTurn = true;
  gameActive = false;
  placedShips = [];
  currentShipIndex = 0;
  orientation = "horizontal";

  UI.showSetupPhase();
  UI.hideModal();

  const boardEl = createSetupBoard();
  setupBoard = humanPlayer.gameboard;

  const hoverHandler = (row, col) => {
    const ship = UI.SHIP_TO_PLACE[currentShipIndex];
    UI.showPreview(row, col, ship.length, orientation, setupBoard, boardEl);
  };

  const clickHandler = (row, col) => {
    if (placedShips.includes(currentShipIndex)) return;

    const ship = UI.SHIP_TO_PLACE[currentShipIndex];

    try {
      setupBoard.placeShip(row, col, ship.length, orientation);
      placedShips.push(currentShipIndex);

      const next = UI.SHIP_TO_PLACE.findIndex(
        (_, i) => !placedShips.includes(i),
      );

      if (next === -1) {
        startGame();
      } else {
        currentShipIndex = next;
        document.getElementById("setup-instruction").textContent =
          `Place your ${UI.SHIP_TO_PLACE[currentShipIndex].name} (${UI.SHIP_TO_PLACE[currentShipIndex].length} cells)`;
      }

      UI.renderSetupBoard(setupBoard, boardEl, hoverHandler, clickHandler);
      UI.renderShipSelector(placedShips, currentShipIndex, (i) => {
        currentShipIndex = i;
      });
    } catch (e) {
      document.getElementById("setup-instruction").textContent =
        "⚠️ Invalid placement! Try again.";
    }
  };

  UI.renderSetupBoard(setupBoard, boardEl, hoverHandler, clickHandler);
  UI.renderShipSelector(placedShips, currentShipIndex, (i) => {
    currentShipIndex = i;
  });

  document.getElementById("setup-instruction").textContent =
    `Place your ${UI.SHIP_TO_PLACE[0].name} (${UI.SHIP_TO_PLACE[0].length} cells)`;
};

const placeShipsRandomly = (gameboard) => {
  gameboard.grid = Array.from({ length: 10 }, () => Array(10).fill(null));
  gameboard._ships = [];
  gameboard._missedAttacks = [];
  gameboard._attackedCells = new Set();

  UI.SHIP_TO_PLACE.forEach(({ length }) => {
    let placed = false;
    while (!placed) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      const dir = Math.random() < 0.5 ? "horizontal" : "vertical";

      try {
        gameboard.placeShip(row, col, length, dir);
        placed = true;
      } catch {
        // coba lagi jika gagal
      }
    }
  });
};

const startGame = () => {
  placeShipsRandomly(computerPlayer.gameboard);

  gameActive = true;
  isPlayerTurn = true;

  UI.showGamePhase();
  UI.updateStatus("Your turn - click enemy waters to attack!", "#6aafff");
  renderBoard();
};

const renderBoard = () => {
  const playerBoardEl = document.getElementById("player-board");
  const enemyBoardEl = document.getElementById("enemy-board");

  UI.renderBoard(humanPlayer.gameboard, playerBoardEl, null, true);

  const clickHandler =
    isPlayerTurn && gameActive
      ? (row, col) => handlePlayerAttack(row, col)
      : null;

  UI.renderBoard(computerPlayer.gameboard, enemyBoardEl, clickHandler, false);
};

const handlePlayerAttack = (row, col) => {
  if (!isPlayerTurn || !gameActive) return;

  try {
    humanPlayer.attack(computerPlayer.gameboard, row, col);
  } catch {
    return;
  }

  if (computerPlayer.gameboard.allSunk()) {
    gameActive = false;
    renderBoard();
    UI.updateStatus("🏆 You sank all enemy ships!", "#4ae28a");
    setTimeout(
      () => UI.showModal("VICTORY!", "You sank all enemy ships! 🎉", "🏆"),
      800,
    );
    return;
  }

  isPlayerTurn = false;
  UI.updateStatus("Computer is thinking...", "#c9a84c");
  renderBoard();

  setTimeout(() => {
    computerPlayer.randomAttack(humanPlayer.gameboard);

    if (humanPlayer.gameboard.allSunk()) {
      gameActive = false;
      renderBoard();
      UI.updateStatus("💀 All your ships were sunk!", "#e24a4a");
      setTimeout(
        () =>
          UI.showModal("DEFEAT!", "The computer sank all your ships!", "💀"),
        800,
      );
      return;
    }

    isPlayerTurn = true;
    UI.updateStatus("Your turn - click enemy waters to attack!", "#6aafff");
    renderBoard();
  }, 700);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-new-game").addEventListener("click", () => {
    initSetup();
  });

  document.getElementById("btn-random-place").addEventListener("click", () => {
    placeShipsRandomly(humanPlayer.gameboard);
    placedShips = UI.SHIP_TO_PLACE.map((_, i) => i);
    startGame();
  });

  document.getElementById("btn-orientation").addEventListener("click", () => {
    orientation = orientation === "horizontal" ? "vertical" : "horizontal";
    document.getElementById("orientation-label").textContent =
      orientation.charAt(0).toUpperCase() + orientation.slice(1);
  });

  document.getElementById("btn-play-again").addEventListener("click", () => {
    initSetup();
  });

  initSetup();
});
