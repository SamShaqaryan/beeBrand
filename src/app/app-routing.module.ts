import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { ContactsComponent } from './pages/contacts/contacts.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { PlansComponent } from './pages/plans/plans.component';
// import { PortfolioComponent } from './pages/portfolio/portfolio.component';
// import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
//   { path: 'home', component: HomePageComponent },
//   { path: 'services', component: ServicesComponent },
//   { path: 'plans', component: PlansComponent },
//   { path: 'portfolio', component: PortfolioComponent },
//   { path: 'about', component: AboutUsComponent },
//   { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
