import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],

  template: `
    
    <main style="display: flex-direction:column; height:100%;">
    <!-- core/navbar.component.html -->
    <div class="filler"></div>
<div class="navbar">

     <div class="navbar-header">
        
            <div><img id= "logo" src = "./assets/images/logo.png"></div>
            <a class="navbar-brand" href = "#/login"><button class="b-style">Login</button></a>
            <a class="navbar-brand" href = "#/login"><button (click)="logout()" class="b-style">FrannyOut</button></a>
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
    </main>
  `
})
export class AppComponent implements OnInit {
  fullImagePath: string;
  public data = {
    keyword: 'public data line 46',
    moreData: 'dataatttata'
  }
  

  public logout(){
    console.log('hello');
    this.http.post('http://localhost:3000/logout' , this.data)
        .subscribe((res)=>{
            console.log('what');
        })
         window.location.hash='#/login';
         console.log('booyahhh');
    }

  constructor( 
     public route: ActivatedRoute,
        private http: Http) {
        http.post('http://localhost:3000/logout', 'yayayayya')
            .subscribe((res)=>{
                console.log(res);
            })  

  }
  
   public ngOnInit() {
        this.route
            .data
            .subscribe((data: any) => {
                //this.localState = data.yourData;
            });
   }
}


