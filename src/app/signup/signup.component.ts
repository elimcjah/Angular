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
        Password:<input [(ngModel)]= "data.password" #ctrl="ngModel"><br>
        <br>
        Email:<input  [(ngModel)]= "data.email" #ctrl="ngModel"><br>  
        <br>
            <br><br>
            <button type="submit" (click)="clicked()">Save & Submit</button>
        
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
    
    public clicked(){
        console.log('hello');
    }

    constructor(
        public route: ActivatedRoute,
        private http: Http) {
        http.post('http://localhost:3000/last', this.data)
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
