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
            <a class="navbar-brand" href = "#/login"><button id="welcome">Welcome</button></a>
            <a class="navbar-brand" href = "#/home"><button id="student">Students</button></a>
            <a class="navbar-brand"><button id="games">Games</button></a>
            <a class="navbar-brand" href = "#/add"><button id="add">+ Student</button></a>
            <a class="navbar-brand"><button id="login">Login</button></a>
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
