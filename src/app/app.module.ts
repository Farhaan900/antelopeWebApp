import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionsTestComponent } from './transactions-test/transactions-test.component';
import { EngineeringComponent } from './engineering/engineering.component';

import { TeamComponent } from './team/team.component';
import { CommunityComponent } from './community/community.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { LegacyComponent } from './legacy/legacy.component';
import { WaveComponent } from './wave/wave.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    TransactionsTestComponent,
    EngineeringComponent,
    TeamComponent,
    CommunityComponent,
    FooterComponent,
    SocialLinksComponent,
    EcosystemComponent,
    SolutionsComponent,
    LegacyComponent,
    WaveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    MatTabsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
