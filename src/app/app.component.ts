import { Component } from '@angular/core';

@Component({
  selector: 'mtr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: boolean = true;
  constructor() {}
}
