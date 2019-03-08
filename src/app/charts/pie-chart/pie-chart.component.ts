import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public pieChartLabels=['sales Q1','sales Q2','sales Q3'];
  public pieChartData=[45,52,78];
  public pieChartType='pie';
  
  constructor() { }

  ngOnInit() {
    
  }

}
