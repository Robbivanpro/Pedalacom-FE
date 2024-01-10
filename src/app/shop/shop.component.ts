import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { ProdottoService } from '../service/prodotto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  responsedata : any
  constructor(public requestservice : ProdottoService, private route : Router){}

  ngOnInit(): void {
    this.requestservice.RichiestaGet();
    //controllare la policy nel back-end



  }

  viewProductDetails(productId: number): void {
    this.route.navigate(['/product', productId]);
  }

  getProductDetails(productId: number): void {
    this.requestservice.getProductById(productId).subscribe(
      (response: any) => {
        this.responsedata = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
  }




}
