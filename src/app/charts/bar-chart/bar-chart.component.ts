import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
// public barChartOptions={
//   scaleShowVerticalLines:false,
//   responsive:true
// }
public barChartLabels=['2006','2007','2008','2008','2009','2010','2011','2012'];
public barChartType='bar';
// public barChartLegend=true;
public barChartData=[
  {data: [12,23,45,65,45,78,45,45],label:'Series A'},
  {data: [12,52,41,63,45,78,96,96],label:'Series B'}
];
  constructor() { }

  ngOnInit() {
  }

}
