let myLibrary = [];
const libCont = document.querySelector('.libContainer');

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
        libCont.append(card);
        card.className = 'bookCard';
    }

}

function form(){
    const nForm = document.createElement('form');
    const nTitleLabel = document.createElement('label');
    nTitleLabel.textContent = "Title:";
    const fTitle = document.createElement('input');
    const nAuthorLabel = document.createElement('label');
    nAuthorLabel.textContent = "Author:";
    const fAuthor = document.createElement('input');
    const nPagesLabel = document.createElement('label');
    nPagesLabel.textContent = "Pages:"
    const fPages = document.createElement('input');
    const nReadLabel = document.createElement('label');
    nReadLabel.textContent = "Read or Not read?:";
    const fRead = document.createElement('input');
    nForm.append(nTitleLabel, fTitle);
    nForm.append(nAuthorLabel, fAuthor);
    nForm.append(nPagesLabel, fPages);
    nForm.append(nReadLabel, fRead);
   // document.body.insertBefore(nForm,libCont);
}

displayBooks();
form();