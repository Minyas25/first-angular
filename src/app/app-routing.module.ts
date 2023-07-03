import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { BoucleComponent } from './boucle/boucle.component';
import { RoomListComponent } from './room-list/room-list.component';
import { QuizzComponent } from './quizz/quizz.component';

const routes:Routes = [
  {path: '', component: FirstComponent},
  {path: 'boucle', component: BoucleComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'quizz', component: QuizzComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
