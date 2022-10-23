// Задача №1.
class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state = this.state * 1.5;
   }

   set state(num) {
      if (num < 0) {
         this._state = 0;
      } else if (num > 100) {
         this._state = 100;
      } else {
         this._state = num;
      }
   }
   get state() {
      return this._state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, type) {
      super(name, releaseDate, pagesCount, type);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount, type) {
      super(name, releaseDate, pagesCount, type);
      this.author = author;
      this.type = "book";
   }
}

class NovelBook extends Book {
   constructor(author, releaseDate, pagesCount, type) {
      super(author, releaseDate, pagesCount, type);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, releaseDate, pagesCount, type) {
      super(author, releaseDate, pagesCount, type);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, releaseDate, pagesCount, type) {
      super(author, releaseDate, pagesCount, type);
      this.type = "detective";
   }
}


// // Задача №2.
class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         return this.books.push(book);
      }
   }

   findBookBy(type, value) {
      let book = this.books.find(book => book[type] === value);
      return book || null;
   }

   giveBookByName(bookName) {
      let giveBoook = this.books.find(book => book.name === bookName);
      let indexBook = this.books.indexOf(giveBoook);
      this.books.splice(indexBook, 1);
      return giveBoook || null;
   }
}





