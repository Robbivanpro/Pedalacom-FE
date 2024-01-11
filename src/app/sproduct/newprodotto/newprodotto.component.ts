import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prodotto } from 'src/app/model/prodotto';
import { Product } from 'src/app/models/product';
import { ProdottoService } from 'src/app/service/prodotto.service';

@Component({
  selector: 'app-newprodotto',
  templateUrl: './newprodotto.component.html',
  styleUrls: ['./newprodotto.component.css']
})
export class NewprodottoComponent {
  nuovidati: Prodotto[]=[];
  newProduct: Prodotto = new Prodotto ("","","",0,0,"",0);
  constructor(public service: ProdottoService){

  }

  onSubmit(form : NgForm){
    this.nuovidati.push(this.newProduct);
    this.service.postProdotti(this.nuovidati)
    .subscribe({
      next: res => {
       // this.nuovidati = res as Product[]
       console.log("Dati caricati",res);
       this.nuovidati.push(res);
       this.newProduct = new Prodotto("","","",0,0,"",0);
      },
      error : err => {console.log(err)}

    })
  }

}
