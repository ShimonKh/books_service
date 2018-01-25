import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Book} from "../../models/books.models";
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-modal-delete-book',
  templateUrl: './modal-delete-book.component.html',
  styleUrls: ['./modal-delete-book.component.css']
})
export class ModalDeleteBookComponent implements OnInit {
  public modalRef: BsModalRef;
  @Input() book: Book;
  @Output() onDeleteBook = new EventEmitter<any>();

  constructor(private modalService: BsModalService, private booksService: BooksService) {
  }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, <ModalOptions>{class: 'modal-sm'});
  }

  deleteBook() {
    this.booksService.deleteBook(this.book.id).subscribe(() => {
      this.modalRef.hide();
      this.sendBook(this.book);
    });
  }

  sendBook(book) {
    this.onDeleteBook.emit(book)
  }
}
