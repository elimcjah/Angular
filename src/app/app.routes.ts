import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HeaderComponent } from './header';
import { TeacherComponent } from './teacher';
import { StudentComponent } from './student';
import { AddStudentComponent } from './add_student';


export const ROUTES: Routes = [
  { path: '',      component: TeacherComponent },
  { path: 'header',component: HeaderComponent },
  { path: 'home',  component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'add',   component: AddStudentComponent },
  { path: '**',    component: NoContentComponent }
  
];

