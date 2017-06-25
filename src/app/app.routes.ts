import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { TeacherComponent } from './teacher';
import { StudentComponent } from './student';
import { AddStudentComponent } from './add_student';




export const ROUTES: Routes = [
  { path: '',      component: TeacherComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home',  component: TeacherComponent },
  { path: 'student', component: StudentComponent},
  { path: 'add',   component: AddStudentComponent},
  { path: '**',    component: NoContentComponent }
  
];

