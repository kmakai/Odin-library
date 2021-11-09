let myLibrary = [];


/* 
new Book("The cat in the hat", "Dr.Suess",25,"read");
new Book("Dune","Frank Herbert"," 688","read");
new Book("The hobbit","J.R.R. Tolkien"," 295","not yet read");
new Book("The Lord of The Rings","J.R.R. Tolkien", " 1216","not yet read");
*/


function Book(title, author, pages, readstatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstatus = readstatus;

}
Book.prototype.info = function () {
    return this.title + ' by ' + this.author + "," + this.pages + " " + "pages, " + this.readstatus;
}

function addBook(book) {
    myLibrary.push(book);
}

let book1 = new Book("The cat in the hat", "Dr.Suess", "25", "read");
let book2 = new Book("Dune", "Frank Herbert", " 688", "read");
let book3 = new Book("The hobbit", "J.R.R. Tolkien", " 295", "not yet read");
let book4 = new Book("The Lord of The Rings", "J.R.R. Tolkien", " 1216", "not yet read");

addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement('p');
        let status = document.createElement('p');
        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`; 
        status.textContent = `Read?: ${myLibrary[i].readstatus}`;
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(status);
        document.body.append(card);
        card.className = 'bookCard';
    }

}

displayBooks();