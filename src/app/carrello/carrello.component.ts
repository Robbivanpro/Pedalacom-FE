import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  cartItems = [
    { name: 'Bici 1', quantity: 2, price: 25.99 },
    { name: 'Bici 2', quantity: 2, price: 15.99 },
    { name: 'Bici 3', quantity: 1, price: 15.99 },
    // Aggiungi altri elementi del carrello se necessario
  ];

  newProduct = {
    name: '',
    quantity: 0,
    price: 0
  };

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
  removeItem(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  addProduct(): void {
    // Aggiungi solo se tutti i campi sono compilati
    if (this.newProduct.name && this.newProduct.quantity > 0 && this.newProduct.price > 0) {
      this.cartItems.push({ ...this.newProduct });
      // Resetta i campi del nuovo prodotto dopo l'aggiunta
      this.newProduct = { name: '', quantity: 0, price: 0 };
    }

  }



}
