import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  


    //Ricorda di dichiarare la variabile!!!!!!!!!1
    addresses$?:Observable<Address[]>
  
  
    constructor (private addressService: AddressService){
  
  
  }
    ngOnInit(): void {
      this.addresses$ = this.addressService.getAllAddresses();
    }
  }
  
