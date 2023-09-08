import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MazeComponent } from './maze/maze.component';
import { ControlsComponent } from './controls/controls.component';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { CongratulationsModalComponent } from './congratulations-modal/congratulations-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeComponent,
    ControlsComponent,
    QuestionModalComponent,
    CongratulationsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
