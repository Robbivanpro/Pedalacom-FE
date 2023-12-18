import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './feature/address/address-list/address-list.component';
import { AddAddressComponent } from './feature/add-address/add-address.component';
import { EditAddressComponent } from './feature/edit-address/edit-address/edit-address.component';

const routes: Routes = [
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
