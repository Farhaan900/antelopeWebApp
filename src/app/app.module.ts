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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionsTestComponent } from './transactions-test/transactions-test.component';
import { EngineeringComponent } from './engineering/engineering.component';

import { CommunityComponent } from './community/community.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { LegacyComponent } from './legacy/legacy.component';
import { WaveComponent } from './wave/wave.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DividerComponent } from './divider/divider.component';
import { SolutionOneComponent } from './solution-one/solution-one.component';
import { SolutionTwoComponent } from './solution-two/solution-two.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TokenComponent } from './token/token.component';
import { TokenAssetComponent } from './token-asset/token-asset.component';
import { TokenEconomicsComponent } from './token-economics/token-economics.component';
import { TokenGovernanceComponent } from './token-governance/token-governance.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TokenPageComponent } from './token-page/token-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    TransactionsTestComponent,
    EngineeringComponent,
    CommunityComponent,
    FooterComponent,
    SocialLinksComponent,
    EcosystemComponent,
    SolutionsComponent,
    LegacyComponent,
    WaveComponent,
    DividerComponent,
    SolutionOneComponent,
    SolutionTwoComponent,
    AboutComponent,
    TeamComponent,
    TokenComponent,
    TokenAssetComponent,
    TokenEconomicsComponent,
    TokenGovernanceComponent,
    LandingPageComponent,
    AboutPageComponent,
    TokenPageComponent,

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
      {path: '', component: LandingPageComponent},
      {path : 'about', component : AboutPageComponent},
      {path : 'token', component : TokenPageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
