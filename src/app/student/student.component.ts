<<<<<<< HEAD
 import {
=======
import {
>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736
   Component,
   OnInit
 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '',
  
  template: `
  <style> .students{
   flex-grow: 1; padding:5em;}
  </style>
         <div style="position:relative; flex-grow:1;">
             <div style="position:absolute; top:0; bottom:0; right:0; left:0; overflow: scroll;">
             </div>
           </div>
<<<<<<< HEAD
    <div>
      <div class= "single_student" template="ngFor let user of users">
        <a href="#/analytics">
        <img src="{{ user.img }}"/>
        </a>
        {{ user.name }}
        </div>
    </div>



=======
           <div>
           <img src="{{ user.img }}"/>
    <h1 style=text-align:center></h1>
    </div>
>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736
    <div style= "display:flex; flex-direction:column; height:100%;">
    <div style = "display: flex; width: 100%; flex-wrap: wrap;">

        <div class= "students" template="ngFor let user of users">
<<<<<<< HEAD
        <a href="#/analytics">
=======
        <a href="#/student">
>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736
        <img src="{{ user.img }}"/>
        </a>
        {{ user.name }}

        </div>
        </div>
    </div>
  `
})

export class StudentComponent implements OnInit {
<<<<<<< HEAD
  public users = [{ name: 'John Cena', img: 'a' },
  { name: 'Colors', img: 'b' }, { name: 'Shapes', img: 'c' }, { name: 'Numbers', img: 'a' }];
    
=======
  public users = [{ name: 'Colors', img: 'a' },
    { name: 'Shapes', img: 'b' }, { name: 'Numbers', img: 'c' }];
>>>>>>> 9a9fb20b87b000b2634ba793052cc5087c44c736
  constructor(
    public route: ActivatedRoute
  ) { }

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
