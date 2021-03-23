import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroFixComponent } from './hero-fix/hero-fix.component';
import { NavbarFixComponent } from './navbar-fix/navbar-fix.component';
import { MainDynComponent } from './main-dyn/main-dyn.component';
import { ContactDynComponent } from './contact-dyn/contact-dyn.component';
import { FooterFixComponent } from './footer-fix/footer-fix.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFixComponent,
    NavbarFixComponent,
    MainDynComponent,
    ContactDynComponent,
    FooterFixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
