import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import {SalarymanagementComponent } from './salarymanagement/salarymanagement.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {MenuComponent } from './menu/menu.component';
const arr:Routes=[
    {path:'',component:LoginComponent},
    {path:'product',component:ProductComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'updateproduct/:product_id',component:UpdateProductComponent},
    {path:'category',component:CategoryComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'updatecategory/:category_name',component:UpdatecategoryComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'addemployee',component:AddEmployeeComponent},
    {path:'updateemployee/:employee_email',component:UpdateEmployeeComponent},
    {path:'salarymanagement',component:SalarymanagementComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'menu',component:MenuComponent},
];

export const routing=RouterModule.forRoot(arr);
