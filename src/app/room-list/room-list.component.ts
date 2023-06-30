import { Component } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {

  list:Room[] = [
    {id: 1, name: 'Living Room', surface: 15, opened: true},
    {id: 2, name: 'Bathroom', surface: 5, opened: false},
    {id: 3, name: 'Bedroom', surface: 10, opened: false}
  ];


}
