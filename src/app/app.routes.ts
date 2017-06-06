import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { HeaderComponent } from './header';
export const ROUTES: Routes = [
  { path: 'header',component: HeaderComponent },
  { path: '**',    component: NoContentComponent }
  
];
