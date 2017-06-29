 import {
   Component,
   OnInit
 } from '@angular/core';
 import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import data from '../student.services'


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
           <div style="width: 160px; height: 150px; background-size: cover;" [ngStyle]="{'background-image': 'url(' + user.img + ')'}">
           </div>
    <div style= "display:flex; flex-direction:column; height:100%;">
    
        <div>
           <a href="#/overview">Overview</a>
           <br>
           <br>
           <a href="#/colors">Colors</a>
           <br>
           <br>
           <a href="#/shapes">Shapes</a>
           <br>
           <br>
           <a href="#/numbers">Numbers</a>
           <br>
           <br>
           <a href="#/sorting">Sorting</a>
           <br>
           <br>
           <a href="#/attention">Attention</a>
           <br>
           <br>
           <a href="#/communication">Communication</a>
           <br>
      </div>
      </div>
        
  `
})
export class StudentComponent implements OnInit {
    
  public users = [{ name: 'Overview'}, { name: 'Colors'},
    { name: 'Shapes'}, { name: 'Numbers'}, { name: 'Sorting' }, { name: 'Attention' },
    { name: 'Communication'}];
  private addStudentUrl = 'http://www.parentingnation.in/Resources/articleimages/actual/668.jpg';
  constructor(
    public route: ActivatedRoute,
    private http: Http 
  ) {
    data.firstname = 'rory';
    console.log('====================')
    console.log(data);
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
