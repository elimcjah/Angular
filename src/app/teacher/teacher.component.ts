import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    styles: [`
    `],
    template: `
    <h1>Sasa</h1>
    <div>
      Sasa is the greatest!
      <pre>npm run start:hmr</pre>
    </div>
    <div>
      <h3>
        I am the greatest ever!
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
  `
})
export class TeacherComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        this.localState = data.yourData;
      });

    console.log('hello `Home` component');

    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    // setTimeout(() => {
    //   System.import('../../assets/mock-data/mock-data.json')
    //     .then((json) => {
    //       console.log('async mockData', json);
    //       this.localState = json;
    //     });

    // });
  }

}