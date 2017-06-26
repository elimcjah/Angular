import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login',
    template: `
    <h1 id = "logintitle">Welcome Teachers & Parents</h1>
    <div style="width: 500px; margin: 200px auto 0 auto; border-radius: 25px; border: 2px solid #6d4c41;">
    <h2> Please login below to access your class</h2>
    <body>
    <div class = "login-forms">
    <label><b>Username</b></label>
    <br>
        <input [(ngModel)]="data.username" placeholder="Enter Username"><br>
    <br>
    <label><b>Password</b></label>
    <br>
    <input type="password" [(ngModel)]="data.password" placeholder="Enter Password"> <br> 
    <br>
    <a href="#/signup">Signup</a>
    <br>
    <br>
    <input type="checkbox" checked="checked"> Remember me
    <br>
    <br>
    <button (click)="login()">Submit</button>
    
    
    </div>
    </body>
    
    
    `
})
export class LoginComponent implements OnInit {
    public data = {
        username: '',
        password: ''

    }
    public login(){
        //http post request to the server
        this.http.post('http://localhost:3000/login' , this.data)
             .subscribe((res)=>{
                 console.log(res);
             })
        console.log(this.data.username);
    }


    constructor(
        public route: ActivatedRoute,
        public http: Http) {
        http.post('http://localhost:3000/login' , this.data)
            .subscribe((res)=>{    
            })
    }
    
    public ngOnInit() {
        this.route
            .data
            .subscribe((data: any) => {
                //this.localState = data.yourData;
            });

        console.log('hello `Home` component');

        this.asyncDataWithWebpack();
    }
    private asyncDataWithWebpack() {

    }
}


