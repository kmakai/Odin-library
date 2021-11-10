let myLibrary = [];
const libCont = document.querySelector('.libContainer');
const newBookButton = document.querySelector('.newBook');
const sButton = document.createElement('button');
sButton.textContent = "Submit Book";
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
        let rmButton = document.createElement('button');
        rmButton.type = "button";
        rmButton.textContent = "Remove";
        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Pages: ${myLibrary[i].pages}`;
        status.textContent = `Read?: ${myLibrary[i].readstatus}`;
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(status);
        card.append(rmButton);
        libCont.append(card);
        card.className = 'bookCard';
        rmButton.addEventListener("click",function(){
            console.log('clicked');
        })
    }

}
let fTitle;
let fAuthor;
let fPages;
let fRead;
function form() {
    const nForm = document.createElement('form');
    nForm.className = "form";
    const nTitleLabel = document.createElement('label');
    nTitleLabel.textContent = "Title:";
    fTitle = document.createElement('input');
    const nAuthorLabel = document.createElement('label');
    nAuthorLabel.textContent = "Author:";
    fAuthor = document.createElement('input');
    const nPagesLabel = document.createElement('label');
    nPagesLabel.textContent = "Pages:"
    fPages = document.createElement('input');
    const nReadLabel = document.createElement('label');
    nReadLabel.textContent = "Read or Not read?:";
    fRead = document.createElement('input');
    nForm.append(nTitleLabel, fTitle);
    nForm.append(nAuthorLabel, fAuthor);
    nForm.append(nPagesLabel, fPages);
    nForm.append(nReadLabel, fRead);

    const sButton = document.createElement('button');
    sButton.type = "button";
    sButton.textContent = "Submit Book";
    nForm.append(sButton);

    document.body.insertBefore(nForm, libCont);

    sButton.addEventListener('click', function () {
        const nbook = new Book(fTitle.value, fAuthor.value, fPages.value, fRead.value);
        addBook(nbook);
        libCont.innerHTML = '';
        displayBooks();
        document.querySelector("form").remove();
    })
}


displayBooks();
newBookButton.addEventListener('click', function () {
    form();

})


