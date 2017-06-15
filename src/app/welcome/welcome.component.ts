import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'welcome',
    template: `
    <h1>Welcome Teacher & Parents</h1>
    
    
    
    
    `
})
export class WelcomeComponent implements OnInit {

    constructor(
        public route: ActivatedRoute) {}
    
    
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


