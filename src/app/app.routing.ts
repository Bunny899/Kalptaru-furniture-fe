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
import {MenunavComponent } from './menunav/menunav.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';
import {OrderComponent} from './order/order.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';
import {UpdateusermanagementComponent} from './usermanagement/updateusermanagement/updateusermanagement.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LoadingComponent } from './loading/loading.component';
const arr:Routes=[
    
    
    {path:'',component:LoginComponent},
    
    {path:'menunav/:user_email',component:MenunavComponent,children:[
        {path:'dashboard',component:DashboardComponent},    
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
        {path:'Viewbill',component:ViewbillComponent},
        {path:'getbilldetails/:bill_id',component:BillDetailsComponent},
        {path:'order',component:OrderComponent},
        {path:'usermanagement',component:UsermanagementComponent},
        {path:'updateuser/:user_email',component:UpdateusermanagementComponent},
    ]},
    
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'myprofile/:user_email',component:MyprofileComponent},
    {path:'loading',component:LoadingComponent},
];

export const routing=RouterModule.forRoot(arr);
