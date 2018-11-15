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
         MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkerSignupComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,

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
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
