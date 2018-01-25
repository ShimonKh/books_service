import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule} from "./app-routing.module";
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import {BooksService} from "./shared/services/books.service";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalEditBookComponent } from './shared/modal-windows/modal-edit-book/modal-edit-book.component';
import { ModalAddBookComponent } from './shared/modal-windows/modal-add-book/modal-add-book.component';
import { ModalDeleteBookComponent } from './shared/modal-windows/modal-delete-book/modal-delete-book.component';
import { TitlePipePipe } from './shared/pipes/title-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    OrdersComponent,
    AboutComponent,
    ModalEditBookComponent,
    ModalAddBookComponent,
    ModalDeleteBookComponent,
    TitlePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
