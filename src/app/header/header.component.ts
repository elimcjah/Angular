import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'header',
    styles: [`
   `],
    template: `
  <!-- core/navbar.component.html -->
<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand"><button id="home">Welcome</button></a>
            <a class="navbar-brand"><button id="student">Students</button></a>
            <a class="navbar-brand"><button id="games">Games</button></a>
            <a class="navbar-brand"><button id="add">+ Student</button></a>
            <a class="navbar-brand"><button id="login">Login</button></a>
        </div>
        
    </div>
</nav>
`
})
export class HeaderComponent implements OnInit {

    public localState: any;
    constructor(
        public route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.route
            .data
            .subscribe((data: any) => {

                this.localState = data.yourData;
            });
        console.log('hello `Header` component');

        this.asyncDataWithWebpack();
    }
    private asyncDataWithWebpack() {

        setTimeout(() => {

           // System.import
               // ('../../assets/mock-data/mock-data.json')
               // .then((json) => {
                   // console.log('async mockData', json);
                 //   this.localState = json;
               // });

        });

    }

}

