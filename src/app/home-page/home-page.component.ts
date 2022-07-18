import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../model/products.interface';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  allProducts = [{
      products: <IProduct[]>this.homeService.getProducts(),
      currentDisplayIndex: 0,
      label: "Animal Products"
    },
    {
      products: <IProduct[]>this.homeService.getProducts(),
      currentDisplayIndex: 0,
      label: "Baby Products"
    },
    {
      products: <IProduct[]>this.homeService.getProducts(),
      currentDisplayIndex: 0,
      label: "Women Products"
    }
  ];
  displayCount = 4;
  // currentDisplayIndex = 0;
  cartItems: IProduct[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {}
  showNext(allProductsIndex: number) {
    const productCount = this.allProducts[allProductsIndex].products.length;
    if (this.allProducts[allProductsIndex].currentDisplayIndex < Math.ceil(productCount / this.displayCount)) {
      this.allProducts[allProductsIndex].currentDisplayIndex++;
    }
  }
  showPrevious(allProductsIndex: number) {
     const productCount = this.allProducts[allProductsIndex].products.length;
    if (this.allProducts[allProductsIndex].currentDisplayIndex > 0) {
      this.allProducts[allProductsIndex].currentDisplayIndex--;
    }
  }

  addToCart(id: number, allProductsIndex: number){
     const product = this.allProducts[allProductsIndex].products.find(prd => prd.id === id);
     product && this.cartItems.push(product);
  }

  enableNextBtn(allProductsIndex: number) {
    const productCount = this.allProducts[allProductsIndex].products.length;
    return this.allProducts[allProductsIndex].currentDisplayIndex < Math.ceil(productCount / this.displayCount);
  }

  enablePreviousBtn(allProductsIndex: number) {
    return this.allProducts[allProductsIndex].currentDisplayIndex > 0;
  }

  gotoCart() {
    this.router.navigate(['./cart']);
  }
}
