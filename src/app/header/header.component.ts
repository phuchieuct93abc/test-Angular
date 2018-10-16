import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header'
})
export class HeaderComponent {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  constructor() {
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
