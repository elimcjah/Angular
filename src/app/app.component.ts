import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    
    <main style="display: flex-direction:column; height:100%;">
    <!-- core/navbar.component.html -->
    <div class="filler"></div>
<div class="navbar">

     <div class="navbar-header">
        
            <div><img id= "logo" src = "./assets/images/logo.png"></div>
            <a class="navbar-brand" href = "#/login"><button class="b-style">Login</button></a>
            <a class="navbar-brand" href = "#/home"><button class="b-style">Students</button></a>
            <a class="navbar-brand"><button class="b-style">Games</button></a>
            <a class="navbar-brand" href = "#/add"><button class="b-style">+Student</button></a>
            <a class="navbar-image"><img id="teach1" src = "./assets/images/teacher1.jpeg"></a>
            <h4 id= "teach-name">Ms. Niki</h4>
            
        </div>
        <div class="brnav">
          <h2 id = "stunav">Student</h2>
        </div>
    
</div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/images/workday.jpg';
  }
}
