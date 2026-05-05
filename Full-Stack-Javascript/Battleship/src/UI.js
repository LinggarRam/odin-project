const UI = (() => {
  const SHIP_TO_PLACE = [
    { name: "Carrier", length: 5 },
    { name: "Battleship", length: 4 },
    { name: "Destroyer", length: 3 },
    { name: "Submarine", length: 3 },
    { name: "Patrol Boat", length: 2 },
  ];

  const renderBoard = (
    gameboard,
    targetElement,
    clickHandler = null,
    showShips = false,
  ) => {
    targetElement.innerHTML = "";

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;

        const cellData = gameboard.grid[row][col];
        const isAttacked = gameboard.isAttacked(row, col);

        if (isAttacked) {
          cell.classList.add("attacked");
          if (cellData !== null) {
            cell.classList.add("hit");
            cell.textContent = "💥";
            if (cellData.ship.isSunk()) cell.classList.add("sunk");
          } else {
            cell.classList.add("miss");
            cell.textContent = "🌊";
          }
        } else if (showShips && cellData !== null) {
          cell.classList.add("ship");
        }

        if (clickHandler && !isAttacked) {
          cell.addEventListener("click", () => clickHandler(row, col));
        }

        targetElement.appendChild(cell);
      }
    }
  };

  const renderSetupBoard = (
    gameboard,
    targetElement,
    hoverHandler,
    clickHandler,
  ) => {
    targetElement.innerHTML = "";

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;

        const cellData = gameboard.grid[row][col];
        if (cellData !== null) cell.classList.add("ship");

        cell.addEventListener("mouseover", () =>
          hoverHandler(row, col, targetElement),
        );
        cell.addEventListener("click", () => clickHandler(row, col));

        targetElement.appendChild(cell);
      }
    }
  };

  const renderShipSelector = (placeShips, activeShipIndex, onSelect) => {
    const selector = document.getElementById("ship-selector");
    selector.innerHTML = "";

    SHIP_TO_PLACE.forEach((ship, i) => {
      const btn = document.createElement("button");
      btn.classList.add("ship-btn");
      btn.textContent = `${ship.name} (${ship.length})`;

      if (placeShips.includes(i)) {
        btn.classList.add("placed");
        btn.disabled = true;
      } else if (i === activeShipIndex) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        if (!placeShips.includes(i)) onSelect(i);
      });

      selector.appendChild(btn);
    });
  };

  const showPreview = (
    row,
    col,
    length,
    direction,
    gameboard,
    boardElement,
  ) => {
    boardElement.querySelectorAll(".cell").forEach((c) => {
      c.classList.remove("preview", "preview-invalid");
    });

    let valid = true;

    for (let i = 0; i < length; i++) {
      const r = direction === "vertical" ? row + i : row;
      const c = direction === "horizontal" ? col + i : col;

      if (r >= 10 || c >= 10 || gameboard.grid[r][c] !== null) {
        valid = false;
        break;
      }
    }

    for (let i = 0; i < length; i++) {
      const r = direction === "vertical" ? row + i : row;
      const c = direction === "horizontal" ? col + i : col;

      if (r >= 10 || c >= 10) continue;

      const cellEl = boardElement.querySelector(
        `[data-row="${r}"][data-col="${c}"]`,
      );
      if (cellEl) {
        cellEl.classList.add(valid ? "preview" : "preview-invalid");
      }
    }
  };

  const updateStatus = (text, color = null) => {
    const el = document.getElementById("status-text");
    el.textContent = text;
    if (color) el.style.color = color;
  };

  const showModal = (title, message, icon = "🏆") => {
    document.getElementById("modal-icon").textContent = icon;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-message").textContent = message;
    document.getElementById("modal").classList.remove("hidden");
  };

  const hideModal = () => {
    document.getElementById("modal").classList.add("hidden");
  };

  const showGamePhase = () => {
    document.getElementById("setup-phase").classList.add("hidden");
    document.getElementById("game-phase").classList.remove("hidden");
  };

  const showSetupPhase = () => {
    document.getElementById("setup-phase").classList.remove("hidden");
    document.getElementById("game-phase").classList.add("hidden");
  };

  return {
    SHIP_TO_PLACE,
    renderBoard,
    renderSetupBoard,
    renderShipSelector,
    showPreview,
    updateStatus,
    showModal,
    hideModal,
    showGamePhase,
    showSetupPhase,
  };
})();

export default UI;
