import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about',
    styles: [`
   `],
    template: `
  <div id="navbar">

        <ul>
            <li>Need 1</li>
            <li>To 2</li>
            <li>Make 3</li>
            <li>This 4</li>
            <li>Better 5</li>
        </ul>

    </div>


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

            System.import
                ('../../assets/mock-data/mock-data.json')
                .then((json) => {
                    console.log('async mockData', json);
                    this.localState = json;
                });

        });

    }

}

