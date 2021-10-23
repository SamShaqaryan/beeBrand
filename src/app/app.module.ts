import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HpPortfolioComponent } from './pages/home-page/hp-portfolio/hp-portfolio.component';
import { HpPartnersComponent } from './pages/home-page/hp-partners/hp-partners.component';
import { HpServicesComponent } from './pages/home-page/hp-services/hp-services.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HpPortfolioComponent,
    HpPartnersComponent,
    HpServicesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
