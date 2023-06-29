import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jean';
  display = false;

  message = '';

  changeName() {
    this.name += ' autre chose';
    console.log(this.name);
    
  }

  toggleDisplay() {
    this.display =!this.display;
  }

}

