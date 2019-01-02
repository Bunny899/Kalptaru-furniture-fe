import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MatInputModule,
         MatTableModule,
         MatPaginatorModule,
         MatSortModule,
         MatFormFieldModule,
         MatButtonModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { SalarymanagementComponent } from './salarymanagement/salarymanagement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';


import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { bill_details } from './classes/bill_details';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    SalarymanagementComponent,
    BillDetailsComponent,
    ViewbillComponent,
    DashboardComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
