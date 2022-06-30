import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { TypefComponent } from './typef/typef.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'categories', component: CategoriesComponent},
  {path:'main', component: MainComponent  },
  {path:'typef', component:TypefComponent },
  {path:'register', component: RegisterComponent },
  {path:'login', component: LoginComponent },
  {path:'profile', component: ProfileComponent },
  {path:'cart', component: CartComponent },
  {path:'buy/:id', component: BuyComponent },
  {path:'checkout', component: CheckoutComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
