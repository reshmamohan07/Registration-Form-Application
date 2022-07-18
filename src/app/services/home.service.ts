import { Injectable } from '@angular/core';
import { IProduct } from '../model/products.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getProducts(): IProduct[] {
    return [
      {
        id: 1,
        name: 'Shibu',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 2,
        name: 'Kunju',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 3,
        name: 'Paile',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 4,
        name: 'Tuttu',
        image: 'https://omarsexoticbirds.com/wp-content/uploads/2019/04/Omars_birds_Lutino_Cockatiel-1.jpg',
      },
      {
        id: 5,
        name: 'KunjuKunj',
        image: 'https://i0.wp.com/www.theanimalstore.com/wp-content/uploads/2018/05/Pineapple-Conurea.jpg?fit=747%2C1200&ssl=1',
      },
      {
        id: 6,
        name: 'Shibu',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 7,
        name: 'Kunju',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 8,
        name: 'Paile',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 9,
        name: 'Tuttu',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      },
      {
        id: 10,
        name: 'KunjuKunj',
        image: 'https://i0.wp.com/www.theanimalstore.com/wp-content/uploads/2018/05/Pineapple-Conurea.jpg?fit=747%2C1200&ssl=1',
      },
    ];
  }
}
