import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HeaderComponent } from './header';
import { TeacherComponent } from './teacher';
import { StudentComponent } from './student';
<<<<<<< HEAD
=======
import { AddStudentComponent } from './add_student';

>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736

export const ROUTES: Routes = [
  { path: '',      component: TeacherComponent },
  { path: 'header',component: HeaderComponent },
  { path: 'home',  component: TeacherComponent },
<<<<<<< HEAD
  { path: 'student', component: StudentComponent},
=======
  { path: 'student', component: StudentComponent },
  { path: 'add',   component: AddStudentComponent },
>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736
  { path: '**',    component: NoContentComponent }
  
];

