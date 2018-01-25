
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BooksComponent} from "./books/books.component";
import {OrdersComponent} from "./orders/orders.component";
import {AboutComponent} from "./about/about.component";

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'about', component: AboutComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{

}
