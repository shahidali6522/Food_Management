import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  constructor() {}
  getFoodItem() {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 3,
        favorite: true,
        star: 1.0,
        imageUrl: '/assets/Food/1.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Shawarma',
        price: 1,
        favorite: false,
        star: 1.0,
        imageUrl: '/assets/Food/2.jpg',
        tags: ['fastFood', 'Shawarma'],
      },
      {
        id: 3,
        name: 'Bragger',
        price: 4,
        favorite: false,
        star: 1.0,
        imageUrl: '/assets/Food/3.jpg',
        tags: ['fastFood', 'Bragger'],
      },
      {
        id: 4,
        name: 'Sandwich',
        price: 4,
        favorite: false,
        star: 1.0,
        imageUrl: '/assets/Food/4.jpg',
        tags: ['fastFood', 'Bragger'],
      },
      {
        id: 5,
        name: 'Seekh Kebabs',
        price: 4,
        favorite: false,
        star: 1.0,
        imageUrl: '/assets/Food/5.jpg',
        tags: ['fastFood', 'Bragger'],
      },
      {
        id: 6,
        name: 'Sprite',
        price: 4,
        favorite: false,
        star: 1.0,
        imageUrl: '/assets/Food/6.png',
        tags: ['fastFood', 'Bragger'],
      },
    ];
  }
}
