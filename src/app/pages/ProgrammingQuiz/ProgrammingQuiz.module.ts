import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreedListPageRoutingModule } from './ProgrammingQuiz.routing.module';

import { BreedListComponent } from './ProgrammingQuiz.component';
import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    BreedListComponent,
  ],
  imports: [
    CommonModule,
    LatestCatsModule,
    BreedListPageRoutingModule,
    ComponentsModule
  ]
})

export class BreedListPageModule {}

