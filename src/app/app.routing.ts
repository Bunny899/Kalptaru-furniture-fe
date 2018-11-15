import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
const arr:Routes=[
    {path:'',component:LoginComponent},
    {path:'workersignup',component:WorkerSignupComponent},
    {path:'product',component:ProductComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'updateproduct/:product_id',component:UpdateProductComponent},
    {path:'category',component:CategoryComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'updatecategory/:category_name',component:UpdatecategoryComponent},
];

export const routing=RouterModule.forRoot(arr);
