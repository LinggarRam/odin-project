console.log("Hallo");

const myLibrary = []

function Book (title, author, pages, read) {
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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 500, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);

console.log(myLibrary);