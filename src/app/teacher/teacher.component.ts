 import {
   Component,
   OnInit
 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../user.service'

@Component({
  selector: '',
  
  templateUrl: './teacher.component.html'
  
})

export class TeacherComponent implements OnInit {
  public users = [{ name: 'John Cena', img: 'https://s-media-cache-ak0.pinimg.com/originals/2f/41/d5/2f41d5e49987c9fa9a4df9046c1ef8e9.jpg' },
    { name: 'Oliver McClendon', img: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2011/10/the-tough-guy.jpg' }, 
    { name: 'Billy Maddison', img: 'https://thumb1.shutterstock.com/display_pic_with_logo/531898/177207620/stock-photo-handsome-little-boy-demonstrating-his-muscles-177207620.jpg'}, 
    { name: 'Pop Eye', img: 'https://thumbs.dreamstime.com/x/peuter-jong-geitje-18227113.jpg'},
    { name: 'Bill Nye', img: 'https://thumbs.dreamstime.com/x/preschool-boy-holding-globe-16273023.jpg'},
    { name: 'Suzy Smiles', img: 'http://www.parentingnation.in/Resources/articleimages/actual/668.jpg' }];
  constructor(
    public route: ActivatedRoute
  ) {
    data.lastname = 'Davis';
   }

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // this.localState = data.yourData;
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
