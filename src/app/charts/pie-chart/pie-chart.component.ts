import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  a=75;
  b=5;
  c=90;
  public pieChartLabels=['sales Q1','sales Q2','sales Q3'];
  public pieChartData=[this.a,this.b,this.c];
  public pieChartType='pie';
  
  constructor() { }

  ngOnInit() {
    
  }

}
