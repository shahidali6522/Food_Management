import { Component } from '@angular/core';
import { FruitService } from 'src/app/services/fruits/fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent {
  fruit:any = this.fruititem.FruitsItem();
  constructor(private fruititem: FruitService) {}

}
