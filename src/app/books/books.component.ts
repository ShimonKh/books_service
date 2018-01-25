import {Component, OnInit} from '@angular/core';

import {BooksService} from "../shared/services/books.service";
import {Book} from "../shared/models/books.models";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService,) {
  }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe((books) => {
        this.books = books;
      })
  }

  updateEditedBook(event: Book) {
    this.replaceProperty(this.books.find((obj) => ( obj.id === event.id)), event);
  }

  replaceProperty(currentBook, editedBook) {
    for (let property in editedBook) {
      currentBook[property] = editedBook[property]
    }
  }

  deleteCurrentBook(book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  addBook(book: Book) {
    new Promise((req, res) => {
      this.booksService.getBookByTitle(book.title)
        .subscribe((book: Book) => {
          this.books.push(book)
        });
    });
  }

}
