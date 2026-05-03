const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const grid = document.getElementById("books-grid");
  grid.innerHTML = "";

  if (myLibrary.length === 0) {
    grid.innerHTML = `<p class="empty-state">Belum ada buku. Tambahkan buku pertama anda!</p>`;
    return;
  }

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p class="read-status ${book.read ? "read" : "unread"}">
            ${book.read ? "Siyap dibaca" : "Tidak Siyap dibaca"}
        </p>
        <div class="card-buttons">
          <button class="btn-toggle" data-id="${book.id}">
            ${book.read ? "Belum dibaca" : "Sudah dibaca"}
          </button>
          <button class="btn-remove" data-id="${book.id}">Remove</button>
        </div>
        `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".btn-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const book = myLibrary.find((b) => b.id === id);

      book.toggleRead();
      displayBooks();
    });
  });

  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const index = myLibrary.findIndex((book) => book.id === id);

      myLibrary.splice(index, 1);
      displayBooks();
    });
  });
}

displayBooks();

const dialog = document.getElementById("book-dialog");
const btnNewBook = document.getElementById("btn-new-book");
const btnCancel = document.getElementById("btn-cancel");
const bookForm = document.getElementById("book-form");

btnNewBook.addEventListener("click", () => {
  dialog.showModal();
});

btnCancel.addEventListener("click", () => {
  dialog.class();
  bookForm.reset();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  dialog.close();
  bookForm.reset();
});
