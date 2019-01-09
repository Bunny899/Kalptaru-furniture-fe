import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {order} from '../classes/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:3000/order/';
  constructor(private _http:HttpClient) { }
  getAllOrder(){
    return this._http.get(this.url);
  }
  deleteOrder(item){
    return this._http.delete(this.url+item.order_id);
  }

}
