import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {product  } from '../classes/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/product/';
  private update_product_url='http://localhost:3000/update_product_without_pic/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
  }
  getProductById(product_id:string){
    return this._http.get(this.url+product_id);
}
  addproduct(item:product)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

  updateproductwithpic(product_id,item:FormData)
  {
    
    return this._http.put(this.url +product_id ,item);
  }
  updateproductwithoutpic(item:product)
  {
      const body=JSON.stringify(item);
      const head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.update_product_url+item.product_id,body,{headers:head1});
  }

  deleteproduct(item){
    return this._http.delete(this.url+item.product_id);
  }
}
