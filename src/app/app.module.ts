import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AddressListComponent } from './feature/address/address-list/address-list.component';
import { AddAddressComponent } from './feature/add-address/add-address.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditAddressComponent } from './feature/edit-address/edit-address/edit-address.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ShopComponent } from './shop/shop.component';
import { SproductComponent } from './sproduct/sproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddressListComponent,
    AddAddressComponent,
    EditAddressComponent,
    FooterComponent,
    HomepageComponent,
    CarrelloComponent,
    ShopComponent,
    SproductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
