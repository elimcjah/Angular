import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    
    <main style="display: flex-direction:column; height:100%;">
    <!-- core/navbar.component.html -->
    <div class="filler"></div>
<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand"><button id="home">Welcome</button></a>
            <a class="navbar-brand" href = "#/home"><button id="student">Students</button></a>
            <a class="navbar-brand"><button id="games">Games</button></a>
            <a class="navbar-brand" href = "#/add"><button id="add">+ Student</button></a>
            <a class="navbar-brand"><button id="login">Login</button></a>
        </div>
        
    </div>
</nav>
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
