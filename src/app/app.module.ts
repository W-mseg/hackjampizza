import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {BasketComponent} from './basket/basket.component';
import {PizzalistComponent} from "./pizzalist/pizzalist.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, BasketComponent, PizzalistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
