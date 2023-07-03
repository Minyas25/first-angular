import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { BoucleComponent } from './boucle/boucle.component';
import { RoomListComponent } from './room-list/room-list.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ApiExampleComponent } from './api-example/api-example.component';

const routes:Routes = [
  {path: '', component: FirstComponent},
  {path: 'boucle', component: BoucleComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'quizz', component: QuizzComponent},
  {path: 'api-example', component: ApiExampleComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
