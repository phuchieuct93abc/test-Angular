import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lam phuc Hieu';

  constructor() {
    this.title = 'Hồ Huỳnh Thị Phương Thuý';
  }
}
