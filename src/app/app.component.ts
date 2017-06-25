import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
      
      <div class="navbar">
        <div class="navbar-header" >

          <div><img class="logo" src="./assets/images/logo.png"></div>
          <!--<a class="navbar-brand" href="#/login"><button id="welcome">Welcome</button></a>
          <a class="navbar-brand" href="#/home"><button id="student">Students</button></a>
          <a class="navbar-brand"><button id="games">Games</button></a>
          <a class="navbar-brand" href="#/add"><button id="add">+ Student</button></a>
          <a class="navbar-brand"><button id="login">Login</button></a>-->
        </div>
        <div class="brnav">
          <h2 id="stunav">Student</h2>
        </div>


      </div>
      <div class="hamburger" (click)="showMenu()">
        <img src="./assets/images/burger.png">
       <div class="mobile-nav"  [class.mobile] = "menuActive">
        <ul>
            <li>Welcome</li>
            <li>Students</li>
            <li>Games</li>
            <li>+ Student</li>
            <li>Login</li>
        </ul>
    </div>
      </div>
      <router-outlet></router-outlet>
    
 
  `
})
export class AppComponent {
  fullImagePath: string;
  menuActive = true;
  showMenu(){
    this.menuActive = !this.menuActive;
    console.log(this.menuActive);
  }
 

  constructor() {
    this.fullImagePath = 'assets/images/workday.jpg';
  }
}

