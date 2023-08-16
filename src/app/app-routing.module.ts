import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { RegistationComponent } from './Components/registation/registation.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { DetailsComponent } from './Components/menu/details/details.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CartComponent } from './Components/cart/cart.component';
import { authGuardGuard } from './Authentication/auth-guard.guard';
import { BuyNowComponent } from './Components/buy-now/buy-now.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  {
    path: "menu", component: MenuComponent} ,
    // children: [
      { path: "details/:_id", component: DetailsComponent, canActivate:[authGuardGuard] },
    // ]
  // },
  { path: "services", component: ServicesComponent },
  { path: "register", component: RegistationComponent },
  { path: "login", component: LoginComponent },
  {path:"profile",component:ProfileComponent, canActivate:[authGuardGuard]},
  {path:"Cart",component:CartComponent, canActivate:[authGuardGuard] },
  {path:"buynow",component:BuyNowComponent},
  { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: 'error-page', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
