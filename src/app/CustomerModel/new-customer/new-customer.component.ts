import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  nuovidati: Customer[]=[];
  newcustomer: Customer = new Customer(0,true,"","","","","","","","")
  constructor(private service: CustomerService){}

  onSubmit(form : NgForm){
    this.nuovidati.push(this.newcustomer);
    this.service.postCustomer(this.nuovidati)
    .subscribe({
      next: res => {
       // this.nuovidati = res as Product[]
       console.log("Dati caricati",res);
       this.nuovidati.push(res);
       this.newcustomer = new Customer(0,true,"","","","","","","","")
      },
      error : err => {console.log(err)}

    })
  }
}
