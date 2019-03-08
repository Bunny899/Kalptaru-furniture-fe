import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {colour} from '../classes/colour';
@Injectable({
  providedIn: 'root'
})
export class ColourService {
  private url = 'http://localhost:3000/colour/';
  constructor(private _http:HttpClient) { }
  getAllColour(){
    return this._http.get(this.url);
  }
}
