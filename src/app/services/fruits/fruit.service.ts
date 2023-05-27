import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  constructor() {}

  FruitsItem() {
    return [
      {
        id: 1,
        name: 'Apple',
        price: 3,
        favorite: true,
        origins: ['italy'],
        star: 3.0,
        imageUrl: '/assets/fruit/1.jpg',
      },
      {
        id: 1,
        name: 'Grapes',
        price: 4,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/fruit/2.jpg',
      },
      {
        id: 1,
        name: 'Mango',
        price: 2,
        favorite: true,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/fruit/3.jpg',
      },
      {
        id: 1,
        name: 'Banana',
        price: 4,
        favorite: false,
        origins: ['italy'],
        star: 2.0,
        imageUrl: '/assets/fruit/4.jpg',
      },
      {
        id: 1,
        name: 'Pich',
        price: 5,
        favorite: true,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/fruit/5.jpg',
      },
      {
        id: 1,
        name: 'Watermelon',
        price: 1,
        favorite: true,
        origins: ['italy'],
        star: 1.0,
        imageUrl: '/assets/fruit/6.jpg',
      },
      {
        id: 1,
        name: 'Cherry',
        price: 2.5,
        favorite: false,
        origins: ['italy'],
        star: 5.5,
        imageUrl: '/assets/fruit/7.jpg',
      },
      {
        id: 1,
        name: 'Acai',
        price: 3,
        favorite: true,
        origins: ['italy'],
        star: 1.0,
        imageUrl: '/assets/fruit/8.jpg',
      },

      {
        id: 1,
        name: 'Pear',
        price: 6,
        favorite: true,
        origins: ['italy'],
        star: 1.0,
        imageUrl: '/assets/fruit/9.jpg',
      },
      {
        id: 1,
        name: 'Orang',
        price: 4,
        favorite: true,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/fruit/10.jpg',
      },
    ];
  }
}
