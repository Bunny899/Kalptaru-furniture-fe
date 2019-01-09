import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {  cols: 1, rows: 1 },
          {  cols: 1, rows: 1 },
          {  cols: 1, rows: 1 },
          {  cols: 1, rows: 1 }
        ];
      }

      return [
        {  cols: 2, rows: 1,img:'../../../../assets/Images/category.jpg'},
        {  cols: 1, rows: 1 ,img:'../../../../assets/Images/ORDER MANAGEMTN.jpg'},
        {  cols: 1, rows: 2 },
        { cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,public _router:Router) {}
  onClick()
  {
    this._router.navigate(['category']);
  }
}
