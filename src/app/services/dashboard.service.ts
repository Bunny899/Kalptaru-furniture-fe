import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private countUser = 'http://localhost:3000/countuser/';
  private countProduct = 'http://localhost:3000/countproduct/';
  constructor(private _http:HttpClient) { }
  CountUser(){
    return this._http.get(this.countUser);
  }
  CountProduct(){
    return this._http.get(this.countProduct);
  }
}
