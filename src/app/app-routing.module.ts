import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './feature/address/address-list/address-list.component';
import { AddAddressComponent } from './feature/add-address/add-address.component';
import { EditAddressComponent } from './feature/edit-address/edit-address/edit-address.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShopComponent } from './shop/shop.component';
import { SproductComponent } from './sproduct/sproduct.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
  },
  {
    path:'carrello',
    component:CarrelloComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
