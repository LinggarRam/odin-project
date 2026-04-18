const GRID_SIZE = 960;

function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    container.style.width = GRID_SIZE + "px";
    container.style.height = GRID_SIZE + "px";

    const itemSize = GRID_SIZE / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = itemSize + "px";
        div.style.height = itemSize + "px";
        div.style.flexShrink = "0";
        div.dataset.opacity = 0;

        div.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            let opacity = parseFloat(div.dataset.opacity);
            if (opacity < 1) opacity = Math.min(1, opacity + 0.1);
            div.dataset.opacity = opacity;

            div.style.opacity = opacity;
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(div);
    }
}

function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    container.style.width = GRID_SIZE + "px";
    container.style.height = GRID_SIZE + "px";

    const itemSize = GRID_SIZE / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = itemSize + "px";
        div.style.height = itemSize + "px";
        div.style.flexShrink = "0";
        div.dataset.opacity = 0;

        div.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            let opacity = parseFloat(div.dataset.opacity);
            if (opacity < 1) opacity = Math.min(1, opacity + 0.1);
            div.dataset.opacity = opacity;

            div.style.opacity = opacity;
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(div);
    }
}

function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
        item.style.opacity = '1';
        item.dataset.opacity = '0';
    });
}

document.getElementById("btn-resize").addEventListener("click", () => {
    let size = parseInt(prompt("Masukkan jumlah kotak per-sisi (max 100):"));

    if (isNaN(size) || size <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    if (size > 100) {
        size = 100;
        alert("Ukuran maksimal adalah 100x100. Grid akan dibuat dengan ukuran 100x100.");
    }

    createGrid(size);
});

document.getElementById("btn-clear").addEventListener("click", () => {
    clearGrid();
});

// Initialize with 16x16 grid
createGrid(16);