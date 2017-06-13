import {
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
           <div>
           <img src= "{{ users.img }}" />
    <h1 style=text-align:center>  </h1>
    </div>
    <div style= "height: 500px; width:500px;">
    <canvas baseChart width="400" height="400"
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColors"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></canvas>
                </div>
    <div style= "display:flex; flex-direction:column; height:100%;">
    <div style = "display: flex; width: 100%; flex-wrap: wrap;">
        
        </div>
    
    </div>
  `
})
export class StudentComponent implements OnInit {
  
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
