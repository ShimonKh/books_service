import {HttpClient, HttpParams} from "@angular/common/http";
import {Book} from "../models/books.models";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {
  }

  API_URL = 'http://localhost:3000/books/';

  getAllBooks(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  getBookByTitle(title: string): Observable<Book> {
    return this.http.get(this.API_URL + '?title=' + title)
      .map((book: Book[]) => book[0] ? book[0] : undefined);
  }

  addNewBook(book:Book):Observable<any>{
    return this.http.post(this.API_URL , book);
  }

  editBook(book: Book): Observable<any> {
    return this.http.put(this.API_URL + book.id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.API_URL + id);
  }


}
