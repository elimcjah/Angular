import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HeaderComponent } from './header';
import { TeacherComponent } from './teacher';

export const ROUTES: Routes = [
  { path: '',      component: TeacherComponent },
  { path: 'header',component: HeaderComponent },
  { path: 'home',  component: TeacherComponent },
  { path: '**',    component: NoContentComponent }
  
];

