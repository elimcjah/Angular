import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header';
import { TeacherComponent } from './teacher';
import { StudentComponent } from './student';
<<<<<<< HEAD
=======
import { AddStudentComponent} from'./add_student';

>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736

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
<<<<<<< HEAD
=======
    AddStudentComponent,
>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736
    NoContentComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
