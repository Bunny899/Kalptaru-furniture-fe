import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {category} from '../classes/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://localhost:3000/category/';
  private url1 = 'http://localhost:3000/category1/'
  constructor(private _http:HttpClient) { }
  getAllCategory(){
    return this._http.get(this.url);
  }
  getCategoryById(category_id:number){
    return this._http.get(this.url+category_id);
}
getCategoryByName(category_name:string){
  return this._http.get(this.url1+category_name);
}
  addCategory(item)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

  updateCategory(item)
  {
    console.log(item);
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url,body,{headers:head1});
  }

  deleteCategory(item){
    return this._http.delete(this.url+item.category_id);
  }
}
