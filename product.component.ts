import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any[] = [
    {
      name: 'Daily Plant Based Creamer',
      imageUrl: '/assets/images/Protein Cold Coffee.png',
      price: 'Rs.200',
      quantity: 0
    },
    {
      name: 'Cafe Style Protein Cold Coffee',
      imageUrl: 'assets/images/Kids Protien.png',
      price: 'Rs.815',
      quantity: 0
    },
   {
      name: 'Cafe Style Protein Frappe',
      imageUrl: '/assets/images/Village Rice.png',
      price: 'Rs.515',
      quantity: 0
   },
    {
      name: 'Daily Women Protein',
      imageUrl: '/assets/images/Women Protein.png',
      price: 'Rs.215',
      quantity: 0
    },
    {
      name: 'Daily Men Protein',
      imageUrl: '/assets/images/Men Protien.png',
      price: 'Rs.215',
      quantity: 0
    },
   {
      name: 'NON DAIRY INSTANT COFFEE',
      imageUrl: '/assets/images/Promix.png',
      price: 'Rs.215',
      quantity: 0
  },
  ];

  name:any

  
constructor() {}

  addToCart(event:any) {
    // const selectedProduct = this.products[index];
    // this.Cartservice.addToCart(selectedProduct);
    // selectedProduct.quantity++;
    console.log(event.target.value)
  }

  removeFromCart(index: number) {
    // const selectedProduct = this.products[index];
    // if (selectedProduct.quantity > 0) {
    //   this.Cartservice.removeFromCart(selectedProduct);
    //   selectedProduct.quantity--;
    // }
  }
}




