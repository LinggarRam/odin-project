const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const grid = document.getElementById("books-grid");
  grid.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p class="read-status ${book.read ? "read" : "unread"}">
            ${book.read ? "Sudah baca" : "Belum Baca"}
        </p>
        <div class="card-buttons">
          <button class="btn-remove" data-id="${book.id}">Remove</button>
        </div>
        `;

    grid.appendChild(card);
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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 500, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);

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
