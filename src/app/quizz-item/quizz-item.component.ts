import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent {
  status = '';
  @Output()
  goodAnswer = new EventEmitter();

  chooseAnswer(index: number) {
    if (this.status == '') {
      if (index === 0) {
        this.status = 'good';
        this.goodAnswer.emit();
      } else {
        this.status = 'bad';
      }
    }
  }
}
