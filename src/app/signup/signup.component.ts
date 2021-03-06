import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'add',
    template: `
<h1>New Account</h1>
    <body>
        <div>
    
        First Name:<input [(ngModel)]="data.first_name" #ctrl="ngModel"><br>
        <br>
        Last Name:<input [(ngModel)]="data.last_name" #ctrl="ngModel"><br> 
        <br>
        Username:<input [(ngModel)]= "data.username" #ctrl="ngModel"><br>
        <br>
        Password:<input type="password" [(ngModel)]= "data.password" #ctrl="ngModel"><br>
        <br>
        Email:<input  [(ngModel)]= "data.email" #ctrl="ngModel"><br>  
        <br>
            <br><br>
            <button (click)="sub()">Save & Submit</button>
            
        </div>
    </body>
         
         `
})



export class SignupComponent implements OnInit {
    public data = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: ''
    }

    public sub(){
        window.location.hash='#/home';
        console.log('eehhhhh');
    }
    
    public clicked(){
        console.log('hello');
         this.http.post('http://localhost:3000/signup' , this.data)
             .subscribe((res)=>{
                 console.log(res);
             })
    }

    constructor(
        public route: ActivatedRoute,
        private http: Http) {
        http.post('http://localhost:3000/signup', this.data)
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

        console.log('hello `Home` component');

        this.asyncDataWithWebpack();

        
    }
    private asyncDataWithWebpack() {

    }


}
