import { Injectable } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  list: Prodotto[]=[]
  constructor(private http: HttpClient) { }

  RichiestaGet(): void{
    this.http.get("url").subscribe({
     next: res => {
       this.list = res as Prodotto[];
     },
     error: err => { console.log(err)}

    })
   }

   postProdotti(){
   return this.http.post("url del form",{})
   }

   onDelete(id:number){
    return this.http.delete("url da inserire"+ id)
   }
}
