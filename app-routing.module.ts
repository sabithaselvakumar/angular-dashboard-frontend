import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   component: HomeComponent 
  // },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'service', 
    component: ServiceComponent
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'product', 
    component: ProductComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path:'productdetails',
    component:ProductdetailsComponent
  },
  {
    path:'cartpage',
    component:CartpageComponent
  },
  {
    path:'product-carousel',
    component:ProductCarouselComponent
  },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
