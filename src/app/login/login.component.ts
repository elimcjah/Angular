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
    <h2> Please login below to access your class</h2>
    <body>
    <div class = "login-forms">
        <input [(ngModel)]="userdata.usname" #ctrl="ngModel" placeholder="Your Login"><br>
    <br>
    <input password [(ngModel)]="userdata.pass" #ctrl="ngModel" placeholder="Your Password"> <br> 
    <br>
    <br>
    <button (click)="clicked()">Submit</button>
    
    
    </div>
    </body>
    
    
    `
})
export class LoginComponent implements OnInit {
    public userdata = {
        usname: '',
        pass: ''

    }
    public clicked(){
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


