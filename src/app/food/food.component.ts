import { Component } from '@angular/core';
import { FoodsService } from '../services/Food/foods.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent {
  fooditem = this.fd.getFoodItem();

  constructor(private fd: FoodsService) {}
}
