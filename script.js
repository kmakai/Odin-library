//========================================== REFACTOR ===========================================//
const libContainer = document.querySelector(".libContainer");
const form = document.querySelector(".form");

// const div = document.createElement("div");

class library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  displayBooks() {
    // libContainer.innerHTML = "";
    for (const [ind, book] of this.books.entries()) {
      // create book card
      const div = document.createElement("div");
      div.className = "book-card";
      div.innerHTML = `
           <h2 class="title">${book.title}</h2>
            <p class="author">By: ${book.author}</p>
            <p class="pages">Pages: ${book.pages}</p>
            <span class="status">${book.status}</span>
          `;

      // add button to delete book.
      const delBookBtn = document.createElement("button");
      delBookBtn.innerText = "Remove";
      delBookBtn.className = "delBtn";
      div.append(delBookBtn);

      delBookBtn.addEventListener("click", () => {
        this.books.splice(ind, 1);

        libContainer.innerHTML = "";
        this.displayBooks();
        console.log(this.books);
      });

      // add read status button
      const statusBtn = document.createElement("button");
      statusBtn.innerText = "change status";
      statusBtn.className = "status-btn";
      div.append(statusBtn);

      statusBtn.addEventListener("click", () => {
        if (this.books[ind].status === "finished") {
          this.books[ind].status = "unfinished";
          libContainer.innerHTML = "";
          this.displayBooks();
        } else if (this.books[ind].status === "unfinished") {
          this.books[ind].status = "finished";
          libContainer.innerHTML = "";
          this.displayBooks();
        }
        console.log(ind);
      });

      libContainer.prepend(div);
    }
  }
}

const keeper = new library();

class book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

// addbook button
const newbookbtn = document.querySelector(".newBook");
const cover = document.querySelector(".cover");
newbookbtn.addEventListener("click", () => {
  form.classList.remove("hidden");
  document.querySelector(".cover").classList.remove("hidden");
});

// book submition form
const bookSubBtn = document.querySelector(".submit-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
bookSubBtn.addEventListener("click", () => {
  console.log(title.value, author.value, pages.value, readStatus.value);
  keeper.addBook(
    new book(title.value, author.value, pages.value, readStatus.value)
  );
  document.querySelector(".form").classList.add("hidden");
  document.querySelector(".cover").classList.add("hidden");
  libContainer.innerHTML = "";
  keeper.displayBooks();
});

/// driver. ///

//place holders for library books;
let book1 = new book("The cat in the hat", "Dr.Suess", "25", "finished");
let book2 = new book("Dune", "Frank Herbert", " 688", "unfinished");
let book3 = new book("The hobbit", "J.R.R. Tolkien", " 295", "unfinished");
let book4 = new book(
  "The Lord of The Rings",
  "J.R.R. Tolkien",
  " 1216",
  "finished"
);
keeper.addBook(book1);
keeper.addBook(book2);
keeper.addBook(book3);
keeper.addBook(book4);

keeper.addBook(
  new book("The Lord of The Rings", "J.R.R. Tolkien", " 1216", "finished")
);
keeper.addBook(new book("The cat in the hat", "Dr.Suess", "25", "finished"));
keeper.addBook(new book("Dune", "Frank Herbert", " 688", "unfinished"));
keeper.addBook(new book("The hobbit", "J.R.R. Tolkien", " 295", "unfinished"));

console.log(keeper);
keeper.displayBooks();
