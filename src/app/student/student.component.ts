 import {
   Component,
   OnInit
 } from '@angular/core';
 import { Http } from '@angular/http';
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
    <div>Hello World</div>
           <div>
           <img src=""/>
           </div>
    <div style= "display:flex; flex-direction:column; height:100%;">
    
      
        <div class= "students" template="ngFor let user of users">
        <a href="#/student">
        {{ user.name }}
        </a>

        </div>
        </div>
  `
})
export class StudentComponent implements OnInit {
    
  public users = [{ name: 'Colors'},
    { name: 'Shapes'}, { name: 'Numbers'}];
  private addStudentUrl = 'http://www.parentingnation.in/Resources/articleimages/actual/668.jpg';
  constructor(
    public route: ActivatedRoute,
    private http: Http 
  ) {
    this.http.get(this.addStudentUrl).subscribe((response)=>{
        console.log(response);
      })
    }
    getAddStudentComponent(){
      
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
