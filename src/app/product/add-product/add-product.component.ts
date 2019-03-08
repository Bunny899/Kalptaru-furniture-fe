import { Component, OnInit } from '@angular/core';
import { product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';
import { colour } from 'src/app/classes/colour';
import { ColourService } from 'src/app/services/colour.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  
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
  ColourArray:colour[]=[];
  categoryArray: category[] = [];
  addProductArray:product[]=[];
  
  constructor(private _productservice:ProductService,private _router:Router,private _categoryservice:CategoryService,private colourservice:ColourService
    ) { }
  onAddProductButton()
  {
   
    this._productservice.addproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
        (data:any)=>{
            console.log(data);
            this.addProductArray.push(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh));
            alert("successfully added");
            
            this._router.navigate (['menunav/:user_email/product']);  
        }
    )
  }
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/product']);  
  }
  i:number=0;
  ngOnInit() {
    
    this._categoryservice.getAllCategory().subscribe(
      (data:any)=>{
        this.categoryArray=data;
      console.log(this.categoryArray);
      }
    );
    
    this.colourservice.getAllColour().subscribe(
      (data:any)=>{
        this.ColourArray=data;
      console.log(this.ColourArray);
      }
    );
    
  }

}
