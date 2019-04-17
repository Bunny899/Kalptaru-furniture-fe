import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:3000/order/';
  private userdetailsbyorder = 'http://localhost:3000/userDetailByOrder/';
  private bill_details_url='http://localhost:3000/empgetbilldetails/';
  constructor(private _http:HttpClient) { }
  getAllOrder(){
    return this._http.get(this.url);
  }
  deleteOrder(item){
    return this._http.delete(this.url+item.order_id);
  }
  getUserDetailsByOrder(){
    return this._http.get(this.userdetailsbyorder);
  }
  getBillDetails(order_id)
  {
    return this._http.get(this.bill_details_url+order_id);
  }  
}
