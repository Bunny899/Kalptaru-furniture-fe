import { Component, OnInit } from '@angular/core';
import { category } from '../../classes/category';
import { categoryname } from '../../classes/categoryname';
import { CategoryService } from '../../services/category.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
   category_id:number;
   category_name:string;

   addProductArray:categoryname[]=[];
  constructor(private _categoryservice:CategoryService,private _router:Router) { }
  onAddCategoryButton()
  {
    this._categoryservice.addCategory(new categoryname(this.category_name)).subscribe(
      (data:any)=>{
          console.log(data);
          this.addProductArray.push(new categoryname(this.category_name));
          alert("successfully added");
          this._router.navigate(['/category']);  
      }
    )
  }
  BackButton()
  {
    this._router.navigate(['/category']);  
  }
  ngOnInit() {
  }

}
