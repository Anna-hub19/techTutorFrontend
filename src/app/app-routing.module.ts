import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'ProgrammingQuiz',
    loadChildren: () => import('./pages/ProgrammingQuiz/ProgrammingQuiz.module').then((m) => m.BreedListPageModule),
  },
  {
    path: 'ProgrammingFlashcards',
    loadChildren: () => import('./pages/ProgrammingFlashcards/ProgrammingFlashcards.module').then((m) => m.MostSearchedPageModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cats/:id',
    loadChildren: () => import('./pages/cats/cats.module').then((m) => m.CatsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
