import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { BoucleComponent } from './boucle/boucle.component';

const routes:Routes = [
  {path: '', component: FirstComponent},
  {path: 'boucle', component: BoucleComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
