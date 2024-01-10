import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  clientidata:any

  constructor(public clientiservizio:CustomerService,public route:Router){}

  ngOnInit(): void {
    this.clientiservizio.GetCostumer();

  }

  viewProductDetails(customerId: number): void {
    this.route.navigate(['/cliente', customerId]);
  }

  getProductDetails(customerId: number): void {
    this.clientidata.getProductById(customerId).subscribe(
      (response: any) => {
        this.clientidata = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
  }

}
