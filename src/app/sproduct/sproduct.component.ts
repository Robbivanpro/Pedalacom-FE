import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../service/prodotto.service';
import { Prodotto } from '../model/prodotto';

@Component({
  selector: 'app-sproduct',
  templateUrl: './sproduct.component.html',
  styleUrls: ['./sproduct.component.css']
})
export class SproductComponent implements OnInit {

  constructor(private requestservice : ProdottoService){}

  ngOnInit(): void {
    this.requestservice.RichiestaGet();
    //controllare la policy nel back-end


  }

  OnDelete(id: number){
    this.requestservice.onDelete(id)
    .subscribe({
      next: res =>{
        this.requestservice.list = res as Prodotto[]
      }
    })
  }

 /*var MainImg = document.getElementById("MainImg");
  var smallImg = document.getElementsByClassName("small-img");

  smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].src;
  }
  smallImg[1].onclick = function() {
    MainImg.src = smallImg[1].scroll;
  }
  smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].scroll;
  }
  smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].scroll;
  }
*/
}
