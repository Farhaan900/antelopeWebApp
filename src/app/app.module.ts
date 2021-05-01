import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { TransactionsTestComponent } from './transactions-test/transactions-test.component';
import { RulerTokenComponent } from './ruler-token/ruler-token.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    TransactionsTestComponent,
    RulerTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
