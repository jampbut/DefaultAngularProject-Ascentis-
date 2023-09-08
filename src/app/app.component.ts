import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DefaultAngularProject';
  showModal: boolean = false;
  currentMazeQuestion: any;

  toggleModal() {
    this.showModal = !this.showModal;
  }
  showCongratsModal: boolean = false;

  toggleCongratsModal() {
    this.showCongratsModal = !this.showCongratsModal;
  }
  toggleQuestionModal() {
    this.showModal = !this.showModal;
  }

  handleCloseModal() {
    this.showModal = false;
}

}
