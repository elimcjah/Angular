import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header';
import { TeacherComponent } from './teacher';
import { StudentComponent } from './student';
import { AddStudentComponent} from'./add_student';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';


import { RouterModule, PreloadAllModules} from '@angular/router';
import { ROUTES } from './app.routes';

import { NoContentComponent } from './no-content';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeacherComponent,
    StudentComponent,
    AddStudentComponent,
    NoContentComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
