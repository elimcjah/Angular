import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    
    
    <div class="filler"></div>
<div class="navbar">

     <div class="navbar-header">
        
            <div><img class= "logo" src = "./assets/images/logo.png"></div>
            <a class="navbar-brand" href = "#/login"><button class="b-style">Login</button></a>
            <a class="navbar-brand" href = "#/home"><button class="b-style">Students</button></a>
            <a class="navbar-brand"><button class="b-style">Games</button></a>
            <a class="navbar-brand" href = "#/add"><button class="b-style">+Student</button></a>
            <a class="navbar-image"><img id="teach1" src = "./assets/images/teacher1.jpeg"></a>
          <div class="hot-drop">
           <button class="drop-btn"><h4 class= "teach-name">Ms. Niki</h4></button>
            <ul class="drop-down">
              <li>Game</li>
              <li>Student</li>
              <li>+Student</li>
              </ul>
            </div>
        </div>
        <div class="brnav">
          <h2 id = "stunav">Student</h2>
        </div>
    
</div>
      <router-outlet></router-outlet>
    
  `
})
export class AppComponent {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/images/workday.jpg';
  }
}
