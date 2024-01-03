import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoService } from 'src/app/service/prodotto.service';

@Component({
  selector: 'app-newprodotto',
  templateUrl: './newprodotto.component.html',
  styleUrls: ['./newprodotto.component.css']
})
export class NewprodottoComponent {

  constructor(public service: ProdottoService){

  }

  onSubmit(form : NgForm){
    this.service.postProdotti()
    .subscribe({
      next: res => {
        this.service.list = res as Prodotto[]
      },
      error : err => {console.log(err)}

    })
  }

}
