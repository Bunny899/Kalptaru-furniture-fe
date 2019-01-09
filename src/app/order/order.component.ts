import { Component, OnInit,ViewChild } from '@angular/core';
import { order } from '../classes/order';
import { OrderService } from '../services/order.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
   order_id:number;
   order_date:Date;
   order_amount:number;
   fk_product_id:String;
   fk_category_id:String;
   order_status:number;

   order:order[]=[];
   deleteOrderArray:order[]=[];
  constructor(private _orderservice:OrderService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'order_date','order_amount','order_status','Action'];
  dataSource=new MatTableDataSource(this.order);

  DeleteOrder(item)
  {
    this._orderservice.deleteOrder(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteOrderArray.splice(this.deleteOrderArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.order; 
      }
    )
  }

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._orderservice.getAllOrder().subscribe(
      (data:any)=>{
        this.order=data;
        this.dataSource.data=this.order; 
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
