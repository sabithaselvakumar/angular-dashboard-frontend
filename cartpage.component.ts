
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';

interface Product {
  id: number;
  productname: string;
  productdescription: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {
  cartItems: Product[]  = []; 

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit() {}

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: Product) {
    item.quantity += 1;
  }

  decreaseQuantity(item: Product) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
