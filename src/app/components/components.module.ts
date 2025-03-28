import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { MenuComponent } from './menu/menu.component';

import { RouterModule } from '@angular/router';
import { LearningTopicsComponent } from './learning-topics/learning-topics.component';
import { QuizComponent } from './quiz/quiz.component';
import { HtmlDecodePipe } from '../html-decode.pipe';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';


@NgModule({
  declarations: [
    MenuComponent,
    LearningTopicsComponent,
    QuizComponent,
    HtmlDecodePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    LearningTopicsComponent,
    QuizComponent,
    HtmlDecodePipe,
 
  ]
})
export class ComponentsModule { }
