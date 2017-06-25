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
    public clicked() {
        this.http.post('http://localhost:3000/user_pass', this.userdata)
            .subscribe((res) => {
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


