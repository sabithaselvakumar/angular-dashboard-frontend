
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-notification',
  templateUrl: './cart-notification.component.html',
  styleUrls: ['./cart-notification.component.scss']
})
export class CartNotificationComponent {
  // @Input() productName: string;
  // @Input() price: number;
  cartItems: any[] = [];

  // quantity: number = 1;

  constructor(private cartService: CartService) { 
    this.cartItems = this.cartService.getCartItems();
  }
}

  

  // this.cartService.getCartItems().subscribe(items => {
  //   this.cartItems = items;
  // });


// increaseQuantity() {
//   this.quantity++;
// }

// decreaseQuantity() {
//   if (this.quantity > 1) {
//     this.quantity--;
//   }
// }

// addToCart() {
//   const item = {
//     productName: this.productName,
//     price: this.price,
//     quantity: this.quantity
//   };

//   this.cartService.addToCart(item);
// }