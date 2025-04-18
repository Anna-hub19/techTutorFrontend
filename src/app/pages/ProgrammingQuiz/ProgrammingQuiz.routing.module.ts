import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedListComponent } from './ProgrammingQuiz.component';

const routes: Routes = [
  {
    path: '',
    component: BreedListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BreedListPageRoutingModule {}
