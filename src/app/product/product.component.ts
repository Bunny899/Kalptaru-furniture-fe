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
   deleteProductArray:product[]=[];
   f:number=0;
  constructor(private _productservice:ProductService,private _router:Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'product_name','product_price','Action'];
  dataSource=new MatTableDataSource(this.product);

  ProductPage()
  {
    this._router.navigate(['/addproduct']);  
  }
  UpdateProduct(item:product)
  {
    console.log(item.product_id)
    this._router.navigate(['/updateproduct',item.product_id]);  
  }
  DeleteProduct(item)
  {
    this._productservice.deleteproduct(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.deleteProductArray.splice(this.deleteProductArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
        console.log(this.dataSource.data);
        this.dataSource.data=this.product; 
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
