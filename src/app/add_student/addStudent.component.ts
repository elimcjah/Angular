import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'add',
    template: `
<h1>NEW STUDENT INFO</h1>
    <body>
        <div>
    
        First Name:<input [(ngModel)]="data.fname" #ctrl="ngModel"><br>
        <br>
        Last Name:<input [(ngModel)]="data.last_name" #ctrl="ngModel"><br> 
        <br>
        Nickname:<input [(ngModel)]= "data.nkname" #ctrl="ngModel"><br>
        <br>
        DOB:<input [(ngModel)]= "data.dob" #ctrl="ngModel"><br>
        <br>
        Student Id #:<input  [(ngModel)]= "data.stid" #ctrl="ngModel"><br>  
        <br>
        Age: <input [(ngModel)]= "data.age" #ctrl="ngModel"><br>
            <br><br>
            <button type="submit" (click)="clicked()">Save&Submit</button>
        
        </div>
    </body>
         `
})



export class AddStudentComponent implements OnInit {
    public data = {
        fname: 'Sasa',
        last_name: 'test',
        nkname: 'loosing',
        dob: 'his',
        stid: 'mojo!!!',
        age: 'Ohhh Shit!'
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