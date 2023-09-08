import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements OnChanges {
  @Input() currentQuestion: any;
  @Output() closeModalEvent = new EventEmitter<void>();

  questionText = 'Sample Question?'; // This will be dynamically set

  selectedOption: any;
  showConfirmButton: boolean = false;
  correctSelection: boolean = false; // Track if the selected answer is correct or not
  showCloseButton: boolean = false; // Track if the close button should be shown
  answerConfirmed: boolean = false; // Track if the answer has been confirmed

  constructor() {}

  ngOnChanges() {
    this.resetModalState(); // Reset the modal state whenever a new question is loaded
    console.log('Question Modal - ngOnChanges triggered');
    console.log('Current Question:', this.currentQuestion);
    if (this.currentQuestion && this.currentQuestion.audio) {
      console.log('Randomized Answers:', this.currentQuestion.randomizedAnswers);
      this.playAudio(this.currentQuestion.audio);
    }
  }

  selectAnswer(answerText: string) {
    this.answerConfirmed = false;  // Reset the flag
    const selectedOption = this.currentQuestion.options.find((option: any) => option.text === answerText);
    this.playAudio(selectedOption.audio);
    this.selectedOption = selectedOption;
    this.showConfirmButton = true;
}


  confirmAnswer() {
    this.answerConfirmed = true;
    if (this.selectedOption.answer === 'BEST' || this.selectedOption.answer === 'NEXTBEST') {
      this.correctSelection = true;
      this.showCloseButton = true; // Show the close button when answer is correct
      
      if (this.selectedOption.answer === 'BEST') {
        this.playAudio('maze_best_active_m');
      } else {
        this.playAudio('maze_next_best_active_m');
      }

    } else {
      this.correctSelection = false;
      this.playAudio('maze_wrong_active_m');
    }
    
    

    this.showConfirmButton = false;
  }

  closeModal() {
    this.resetModalState();
    this.closeModalEvent.emit();
  }

  resetModalState() {
    this.selectedOption = null;
    this.showConfirmButton = false;
    this.correctSelection = false;
    this.showCloseButton = false;
    this.answerConfirmed = false;
  }

  playAudio(audioReference: string) {
    console.log('Trying to play audio:', audioReference);
    const audio = new Audio(`/assets/Audios/${audioReference.toLowerCase()}.mp3`);
    audio.play();
  }
}
