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
   fk_user_email:string;

   order:order[]=[];
   deleteOrderArray:order[]=[];
   productArray:order[]=[];
  constructor(private _orderservice:OrderService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'product_name','order_amount','product_Roomtype','user_name','user_address','Action'];
  dataSource=new MatTableDataSource(this.order);
user_email:string;
  DeleteOrder(item)
  {
    this._orderservice.deleteOrder(item).subscribe(
      (data:any)=>{
        // console.log(data);
        this.deleteOrderArray.splice(this.deleteOrderArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        // console.log(this.dataSource.data);
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
        // console.log(data);
      }
    );
    
    this._orderservice.getUserDetailsByOrder().subscribe((data:any)=>{
      this.order=data;
        this.dataSource.data=this.order; 
        
       //console.log(data);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
