import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login',
    // style: ,
    template: `
    <h1 id = "logintitle">Welcome Teachers & Parents</h1>
    <div style="width: 500px; margin: 200px auto 0 auto; border-radius: 25px; border: 2px solid #6d4c41;">
    <h2> Please login below to access your class</h2>
    <body>
    <div class = "login-forms">
    <label><b>Username</b></label>
    <br>
        <input [(ngModel)]="userdata.usname" #ctrl="ngModel" placeholder="Enter Username"><br>
    <br>
    <label><b>Password</b></label>
    <br>
    <input type="password" [(ngModel)]="userdata.pass" #ctrl="ngModel" placeholder="Enter Password"> <br> 
    <br>
    <a href="#/signup">Signup</a>
    <br>
    <br>
    <input type="checkbox" checked="checked"> Remember me
    <br>
    <br>
    <button (click)="sub()">Submit</button>
    
    <style> 
    @media screen and (max-width: 460px) {
    * {
        background-color: lightgreen;
    }
}

</style>        
            <h1 id="logintitle">Welcome Teachers and Parents</h1>
            <h2> Please login below to access your class</h2>
        

       
        <div>
            <div class="col-2"> </div>
            <div class="login-forms col-4">
                <input [(ngModel)]="userdata.usname" #ctrl="ngModel" placeholder="Your Login"><br>
                <br>
                <input password [(ngModel)]="userdata.pass" #ctrl="ngModel" placeholder="Your Password"> <br>
                <br>
                <br>
                <button (click)="clicked()">Submit</button>
            </div>
            <div class="col-6"> </div>
        </div>
    
    
    `
})
export class LoginComponent implements OnInit {
    public userdata = {
        usname: '',
        pass: ''

    }

    public sub(){
        window.location.hash='#/home';
        console.log('ehhhh');
    }
    public clicked(){
        //http post request to the server
        this.http.post('http://localhost:3000/user_pass' , this.userdata)
             .subscribe((res)=>{
                 console.log(res);
             })
        console.log('submit pass', this.userdata.usname)
    }


    constructor(
        public route: ActivatedRoute,
        public http: Http) {

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


