import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  a = 10;
  b = 20;
  constructor() {
    this.a = this.a + this.b;
    this.b = this.a - this.b;
    this.a = this.a - this.b;
  }
}
