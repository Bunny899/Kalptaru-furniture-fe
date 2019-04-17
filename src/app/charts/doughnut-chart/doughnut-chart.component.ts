import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  constructor(private _dashboardservice:DashboardService) { }
  
countuser:number;
countproduct:number;

public doughnutChartLabels=['Customer','Product'];
public doughnutChartType='doughnut';
public doughnutChartData=[2,2];
  ngOnInit() {
    
  }
  
}
