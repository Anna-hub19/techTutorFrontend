import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';

import { LatestCatsModule } from 'src/app/components/latest-cats/latest-cats.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LatestCatsModule,
    LoaderModule, 
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomePageModule {}
