import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private countUser = 'http://localhost:3000/countuser/';
  private countProduct = 'http://localhost:3000/countproduct/';
  private countEmployee = 'http://localhost:3000/countEmployee/';
  private countCategory = 'http://localhost:3000/countCategory/';
  private productByCategoryId = 'http://localhost:3000/userproductByCategoryId/';
  constructor(private _http:HttpClient) { }
  CountUser(){
    return this._http.get(this.countUser);
  }
  CountProduct(){
    return this._http.get(this.countProduct);
  }
  CountEmployee(){
    return this._http.get(this.countEmployee);
  }
  CountCategory(category_id:number){
    return this._http.get(this.countCategory+category_id);
  }
  ProductByCategoryId(fk_category_id:number){
    return this._http.get(this.productByCategoryId+fk_category_id);
  }
}
