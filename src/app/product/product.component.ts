import { Component, OnInit,ViewChild } from '@angular/core';
import { product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   product_id:string;
   product_name:string;
   category_id:number;
   product_price:number;
   product_colour:string;
   product_image:string;
   product_weight:number;
   product_warranty:number;
   product_material:string;
   product_Roomtype:string;
   product_height:number;
   product_width:number;
   product_depth:number;
   product_qty:number;
   product_soh:number;
   product:product[]=[];
   addProductArray:product[]=[];
  constructor(private _productservice:ProductService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'product_name','product_price'];
  dataSource=new MatTableDataSource(this.product);

  onAddProductButton()
  {
    this._productservice.addproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
        (data:any)=>{
            console.log(data);
            this.addProductArray.push(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh));
            alert("successfully added");
        }
    )
  }

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._productservice.getAllProduct().subscribe(
      (data:any)=>{
        this.product=data;
        this.dataSource.data=this.product; 
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
