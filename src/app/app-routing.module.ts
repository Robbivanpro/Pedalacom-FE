import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './feature/address/address-list/address-list.component';
import { AddAddressComponent } from './feature/add-address/add-address.component';
import { EditAddressComponent } from './feature/edit-address/edit-address/edit-address.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { SproductComponent } from './sproduct/sproduct.component';
import { CheckoutComponent } from './carrello/checkout/checkout.component';
import { CustomerComponent } from './customer/customer.component';
import { ScustomerComponent } from './scustomer/scustomer.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { CategorieComponent } from './categorie/categorie.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
  },
  {
    path:'Categorie',
    component:CategorieComponent,
  },
  {
    path:'carrello',
    component:CarrelloComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'registrazione',
    component:RegistrazioneComponent,
  },
  {
    path:'checkout',
    component:CheckoutComponent,
  },
  {
    path:'shop',
    component:ShopComponent,
  },
  {
    path:'sproduct',
    component:SproductComponent,
  },
  {
    path:'admin/address',
    component:AddressListComponent,
  },
  {
    path:'admin/address/add',
    component:AddAddressComponent,
  },
  {
    path:'admin/address/:id',
    component:EditAddressComponent,
  },
  {
    path:'product/:id',
    component:SproductComponent
  },
  {
    path: 'clienti',
    component:CustomerComponent

  },
  {
    path: 'cliente/:id',
    component:ScustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
