import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  @Output() directionChosen = new EventEmitter<string>();

  move(direction: string) {
    this.directionChosen.emit(direction);
  }
}
