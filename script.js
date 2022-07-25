//========================================== REFACTOR ===========================================//
const libContainer = document.querySelector('.libContainer');
const form = document.querySelector('.form');
const booksRead = document.querySelector('.read span');
const booksNotRead = document.querySelector('.unread span');

// const div = document.createElement("div");

class library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  displayBooks() {
    let readbooks = 0;
    let unreadbooks = 0;
    // libContainer.innerHTML = "";
    for (const [ind, book] of this.books.entries()) {
      // create book card
      const div = document.createElement('div');
      div.className = 'book-card';
      div.innerHTML = `
           <h2 class="title">${book.title}</h2>
            <p class="author">By: ${book.author}</p>
            <p class="pages">Pages: ${book.pages}</p>
            <span class="status">${book.status}</span>
          `;

      // add button to delete book.
      const delBookBtn = document.createElement('button');
      delBookBtn.innerText = 'Remove';
      delBookBtn.className = 'delBtn';
      div.append(delBookBtn);

      delBookBtn.addEventListener('click', () => {
        this.books.splice(ind, 1);

        libContainer.innerHTML = '';
        this.displayBooks();
        console.log(this.books);
      });

      // add read status button
      const statusBtn = document.createElement('button');
      statusBtn.innerText = 'change status';
      statusBtn.className = 'status-btn';
      div.append(statusBtn);

      statusBtn.addEventListener('click', () => {
        if (this.books[ind].status === 'finished') {
          this.books[ind].status = 'unfinished';
          libContainer.innerHTML = '';
          this.displayBooks();
        } else if (this.books[ind].status === 'unfinished') {
          this.books[ind].status = 'finished';
          libContainer.innerHTML = '';
          this.displayBooks();
        }
      });

      // update stats UI

      book.status === 'finished' ? (readbooks += 1) : (unreadbooks += 1);

      // reset stats UI
      // booksRead.textContent = booksNotRead.textContent = "";

      booksRead.textContent = readbooks;
      booksNotRead.textContent = unreadbooks;

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
const newbookbtn = document.querySelector('.newBook');
newbookbtn.addEventListener('click', () => {
  form.classList.toggle('hidden');
});

// book submition form
const bookSubBtn = document.querySelector('.submit-btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#status');
bookSubBtn.addEventListener('click', () => {
  if (
    document.querySelector('form').checkValidity() &&
    readStatus.value !== 'none'
  ) {
    keeper.addBook(
      new book(title.value, author.value, pages.value, readStatus.value)
    );

    title.value = author.value = pages.value = readStatus.value = '';

    form.classList.toggle('hidden');
    libContainer.innerHTML = '';
    keeper.displayBooks();
  }
});

/// driver. ///

//place holders for library books;
keeper.addBook(
  new book('The Lord of The Rings', 'J.R.R. Tolkien', ' 1216', 'finished')
);
keeper.addBook(new book('The cat in the hat', 'Dr.Suess', '25', 'finished'));
keeper.addBook(new book('Dune', 'Frank Herbert', ' 688', 'unfinished'));
keeper.addBook(new book('The hobbit', 'J.R.R. Tolkien', ' 295', 'unfinished'));

keeper.addBook(
  new book('The Lord of The Rings', 'J.R.R. Tolkien', ' 1216', 'finished')
);
keeper.addBook(new book('The cat in the hat', 'Dr.Suess', '25', 'finished'));
keeper.addBook(new book('Dune', 'Frank Herbert', ' 688', 'unfinished'));
keeper.addBook(new book('The hobbit', 'J.R.R. Tolkien', ' 295', 'unfinished'));

console.log(keeper);
keeper.displayBooks();
