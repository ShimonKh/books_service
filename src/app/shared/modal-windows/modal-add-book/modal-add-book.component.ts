import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../models/books.models";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-modal-add-book',
  templateUrl: './modal-add-book.component.html',
  styleUrls: ['./modal-add-book.component.css']
})
export class ModalAddBookComponent implements OnInit {
  AUTHOR_MAX_LENGTH = 120;
  TITLE_MAX_LENGTH = 120;
  form: FormGroup;
  book: Book;
  modalRef: BsModalRef;

  @Output() onAddBook = new EventEmitter<any>();

  constructor(private modalService: BsModalService,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'author': new FormControl(null, [Validators.required, Validators.maxLength(this.AUTHOR_MAX_LENGTH)]),
      'title': new FormControl(null, [Validators.required, Validators.maxLength(this.TITLE_MAX_LENGTH)], this.forbiddenTitles.bind(this)),
      'date': new FormControl(null, [Validators.required])
    });
  }

  public openModal(template: TemplateRef<any>) {
    console.log(this.form.value);
    this.form.reset();
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    const {author, title, date} = this.form.value;
    const newBook = new Book(author, title, date);
    this.booksService.addNewBook(newBook).subscribe(() => {
      this.modalRef.hide();
      this.form.reset();
      this.sendBook(newBook);
    })
  }

  sendBook(book) {
    this.onAddBook.emit(book)
  }

  forbiddenTitles(control: FormControl): Promise<any> {
    return new Promise((req, res) => {
      this.booksService.getBookByTitle(control.value)
        .subscribe((book: Book) => {
          if (book) {
            req({forbidden: true});
          } else {
            req(null);
          }
        });
    });
  }
}
