import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { ProdottoService } from '../service/prodotto.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  responsedata : any
  constructor(private requestservice : ProdottoService){}

  ngOnInit(): void {
    this.requestservice.RichiestaGet();
    //controllare la policy nel back-end


  }



}
