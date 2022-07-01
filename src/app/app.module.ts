import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { BuyComponent } from './buy/buy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { TypefComponent } from './typef/typef.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AUthInterceptor } from './guards/auth-interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

import {MatDialogModule} from '@angular/material/dialog';

import { TypefoodComponent } from './typefood/typefood.component';
import { TypefoodlistComponent } from './typefoodlist/typefoodlist.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MainComponent,
    BuyComponent,
    TypefComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,

    TypefoodComponent,
      TypefoodlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    NgxSpinnerModule,
    MatDialogModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AUthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
