import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { vegetableService } from '../services/vegetable/vegetable.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  tags: Tag[] = [];
   constructor(private VGT:vegetableService){}
   ngOnInit(){
    this.tags=this.VGT.getAllTag()

   }
}
