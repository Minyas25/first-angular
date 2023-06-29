import { Component } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent {
  list = ['Ga', 'Zo', 'Bu', 'Meu'];

  addItem(text:string){
    this.list.push(text);
    
  }
}
