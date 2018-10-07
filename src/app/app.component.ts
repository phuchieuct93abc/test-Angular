import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 title:string = 'Lam phuc Hieu';
 ngOnInit(): void {
  this.title="Hồ Huỳnh Thị Phương Thuý"   
 }
}
