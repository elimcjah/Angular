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
  <main style="display: flex-direction:column; height:100%;">
    <!-- core/navbar.component.html -->
    <div class="filler"></div>
<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            <img src = "./images/logo.png">
            <a class="navbar-brand"><button id="home">Welcome</button></a>
            <a class="navbar-brand" href = "#/home"><button id="student">Students</button></a>
            <a class="navbar-brand"><button id="games">Games</button></a>
            <a class="navbar-brand" href = "#/add"><button id="add">+ Student</button></a>
            <a class="navbar-brand"><button id="login">Login</button></a>
        </div>
        
    </div>
</nav>
      <router-outlet></router-outlet>
    </main>
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

