import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],

  template: `
 
<div class="navbar">
  <div class="sideMenu">
    <div class="hamburger" (click)="showMenu()">
    <!--<div [class.hide]="imgActive">-->
      <img src="./assets/images/burger.png">
      <!--</div>-->
      <div class="mobile-nav" [class.mobile]="menuActive">
        <ul>
          <li><a href="#/login">Welcome </a></li>
          <li><a href="#/home">Students</a></li>
          <li>Games</li>
          <li><a href="#/add">+ Student </a></li>
          <li>Login</li>
          <!--<li (click)="showImg()">EXIT Menu</li>-->
        </ul>
      </div>
    </div>
  </div>
  <div class="navbar-header">

    <div><img class="logo" src="./assets/images/logo.png"></div>
   
  </div>
  <div class="brnav">
    <h2 id="stunav">Student</h2>
  </div>


</div>

<router-outlet></router-outlet>
 
  `
})
export class AppComponent implements OnInit {
  fullImagePath: string;
  public data = {
    keyword: 'public data line 46',
    moreData: 'dataatttata'
  }
  // imgActive = false;
  // showImg(){
  //   this.imgActive = !this.imgActive;
  //   console.log("HEYYYY DAVIS");
  // }
menuActive = true;
counter = 0;
  showMenu(){
    this.menuActive = !this.menuActive;
    console.log(this.menuActive);
    this.counter++;
    console.log(this.counter + "  i am at this count");
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
