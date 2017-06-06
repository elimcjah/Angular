import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { TeacherComponent } from './teacher';

export const ROUTES: Routes = [
  { path: '',      component: TeacherComponent },
  { path: 'home',  component: TeacherComponent },
  { path: '**',    component: NoContentComponent }
];

