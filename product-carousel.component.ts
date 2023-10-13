// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import { Router } from '@angular/router';
// import { ProductService } from '../product.service';


// @Component({
//   selector: 'app-product-carousel',
//   templateUrl: './product-carousel.component.html',
//   styleUrls: ['./product-carousel.component.scss']
// })
// export class ProductCarouselComponent  implements OnInit {

//   products: any[] = []; 
//   // customOptions: OwlOptions = {
//   //   loop: true,
//   //   mouseDrag: true,
//   //   touchDrag: false,
//   //   pullDrag: false,
//   //   dots: false,
//   //   navSpeed: 900,
//   //   autoplay: true,
//   //   navText: ['', ''],
//   //   responsive: {
//   //     0: {
//   //       items: 1
//   //     },
//   //     400: {
//   //       items: 2
//   //     },
//   //     740: {
//   //       items: 1
//   //     },
//   //     940: {
//   //       items: 4
//   //     }
//   //   },
//   //   nav: true
//   // };

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.fetchProducts();
//   }

//   fetchProducts() {
//     this.productService.getProducts().subscribe(
//       (data) => {
//         this.products = data;
//         console.log('Products:', this.products);
//       },
//       (error) => {
//         console.error('Error fetching products:', error);
//       }
//     );
//   }
//   addToCart(product: any) {
    
//     console.log('Adding to cart:', product);
//   }

//   increaseQuantity(product: any) {
    
//     console.log('Increasing quantity:', product);
//   }

//   decreaseQuantity(product: any) {
    
//     console.log('Decreasing quantity:', product);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  products: any[] = [];
  
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Adding to cart:', product);
  }

  increaseQuantity(product: any) {
    console.log('Increasing quantity:', product);
  }

  decreaseQuantity(product: any) {
    console.log('Decreasing quantity:', product);
  }
}






