import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { vegetableName } from 'src/app/shared/models/vegetable';

@Injectable({
  providedIn: 'root',
})
export class vegetableService {
  constructor() {}

  getAllFoodByTag(tag: string): vegetableName[] {
    return tag == 'All'
      ? this.getvegetableItems()
      : this.getvegetableItems().filter((food) => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Lady Finger', count: 4 },
      { name: 'Onion', count: 2 },
      { name: 'Potato', count: 3 },
      { name: 'Bell Pepper', count: 2 },
      { name: 'Turnip', count: 1 },
      { name: 'Tomato', count: 1 },
      { name: 'Green peas', count: 1 },
      { name: 'Ginger', count: 2 },
    ];
  }
  getvegetableItems(): vegetableName[] {
    return [
      {
        id: 1,
        name: 'Lady Finger',
        price: 10,
        favorite: true,
        origins: ['italy'],
        star: 1.0,
        imageUrl: '/assets/vagtabel/1.jpg',
        tags: ['Lady Finger', 'Lunch'],
      },
      {
        id: 2,
        name: 'Onion',
        price: 15,

        favorite: false,
        origins: ['Lahore south asia'],
        star: 1.5,
        imageUrl: '/assets/vagtabel/2.jpg',
        tags: ['Onion', 'Lunch'],
      },
      {
        id: 3,
        name: 'Potato',
        price: 5,
        favorite: true,
        origins: ['germany', 'US'],
        star: 2.0,
        imageUrl: '/assets/vagtabel/3.jpg',
        tags: ['Potato'],
      },
      {
        id: 4,
        name: 'Bell Pepper',
        price: 2,

        favorite: false,
        origins: ['belgium', 'france'],
        star: 2.5,
        imageUrl: '/assets/vagtabel/4.jpg',
        tags: ['Bell Pepper'],
      },
      {
        id: 5,
        name: 'Turnip',
        price: 11,

        favorite: true,
        origins: ['Pakistan', 'south asia'],
        star: 3.0,
        imageUrl: '/assets/vagtabel/5.jpg',
        tags: ['Turnip'],
      },
      {
        id: 6,
        name: 'Tomato',
        price: 9,

        favorite: false,
        origins: ['italy', 'south asia'],
        star: 3.5,
        imageUrl: '/assets/vagtabel/6.jpg',
        tags: ['Tomato'],
      },
      {
        id: 7,
        name: 'Green peas',
        price: 10,

        favorite: true,
        origins: ['Pakistan south asia'],
        star: 4.0,
        imageUrl: '/assets/vagtabel/7.jpg',
        tags: ['Green peas'],
      },
      {
        id: 8,
        name: 'Ginger',
        price: 15,

        favorite: false,
        origins: ['Lahore south asia'],
        star: 4.5,
        imageUrl: '/assets/vagtabel/8.jpg',
        tags: ['Ginger'],
      },

      {
        id: 9,
        name: 'Cauliflower',
        price: 15,

        favorite: false,
        origins: ['Lahore south asia'],
        star: 5.0,
        imageUrl: '/assets/vagtabel/9.jpg',
        tags: ['Cauliflower'],
      },
      {
        id: 10,
        name: 'Beetroot',
        price: 15,

        favorite: false,
        origins: ['Lahore south asia'],
        star: 6,
        imageUrl: '/assets/vagtabel/10.jpg',
        tags: ['Beetroot'],
      },
    ];
  }
}
