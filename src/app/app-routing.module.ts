import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FruitComponent } from './Fruits/fruit/fruit.component';
import { FoodComponent } from './food/food.component';
import { VegetableComponent } from './Vegetables/module/Vegetable/Vegetable.component';

const routes: Routes = [
  { path: 'vegetable', component: VegetableComponent },
  { path: 'search/:searchItem', component: VegetableComponent },
  { path: 'tag/:tag', component: VegetableComponent },
  { path: 'Fruit', component: FruitComponent },
  { path: 'food', component: FoodComponent },
  { path: '', redirectTo: 'vegetable', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
