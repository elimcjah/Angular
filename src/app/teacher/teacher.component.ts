 import {
   Component,
   OnInit
 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '',
  

  template: `
  <style> .students{
   flex-grow: 1; padding:4em;}
  </style>
  <div style= "display:flex; flex-direction:column; height:100%;">
         <div style="background-color:black; height:50px;">
         </div>
         <div style="position:relative; flex-grow:1;">
             <div style="position:absolute; top:0; bottom:0; right:0; left:0; overflow: scroll;">
           <div>
                   <h1 style=text-align:center>Students</h1>
                </div>
             <div style = "display: flex; width: 100%; flex-wrap: wrap;"> 
      
               <div class = "students" template="ngFor let user of users">
                 <a href="#/about">
                   <img src="{{ user.img }}"/> 
                 </a>
               {{ user.name }}
        
               </div>
    
             </div>
           </div>
         </div>
    </div>
    <div>
      <h1 style=text-align:center>Students</h1>
    </div>
    <div style = "display: flex; width: 100%">

        <div style = "flex-grow: 1" template="ngFor let user of users">
        <a href="#/about">
        <img src="{{ user.img }}"/>
        </a>
        {{ user.name }}

        </div>

    </div>
  `
})

export class TeacherComponent implements OnInit {
  public users = ["", { name: 'John Cena', img: 'a' },
    { name: 'Oliver McClendon', img: 'b' }, { name: 'Billy Maddison', img: 'c' }];
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
