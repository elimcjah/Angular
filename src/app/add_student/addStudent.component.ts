import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'add', 
    template: `
<h1>ADD STUDENT </h1>
    
    
    
    
    
    
    
    
    `
})
export class AddStudentComponent implements OnInit {
    constructor(
        public route: ActivatedRoute
    ) { }

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