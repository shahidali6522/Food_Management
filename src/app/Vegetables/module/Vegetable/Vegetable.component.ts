import { Component } from '@angular/core';
import { vegetableService } from 'src/app/services/vegetable/vegetable.service';
import { vegetableName } from 'src/app/shared/models/vegetable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Vegetable',
  templateUrl: './Vegetable.component.html',
  styleUrls: ['./Vegetable.component.scss'],
})
export class VegetableComponent {
  foods: vegetableName[] = [];
  constructor(private fs: vegetableService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((itemName) => {
      if (itemName['searchItem']) {
        this.foods = this.fs
          .getvegetableItems()
          .filter((vegetableName) =>
            vegetableName.name
              .toLowerCase()
              .includes(itemName['searchItem'].toLowerCase())
          );
      } 
      else if (itemName['tag']) {
        this.foods=this.fs.getAllFoodByTag(itemName['tag'])
      } 

      else this.foods = this.fs.getvegetableItems();
    });
  }
}
