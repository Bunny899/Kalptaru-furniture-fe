import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { log } from '../classes/login';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user_email:string;
   user_password:string;
   user_name:string;
   user_mobileno:number;
   user_city:string;
   user_gender:string;
   user_address:string;
   user_type:number;
   
   product_id:string;
  constructor(private _abc:LoginService,private _router:Router) { }

  ngOnInit() {
  }
  
  onadd(){

    this._abc.getLoginByEmailAndPassword(new log(this.user_email,this.user_password)).subscribe(
      (data:any)=>
      {
        console.log(data);
        if(data.length == 1){
          if(data[0].user_type==1)
          {
            alert("Login Successfully"); 
            this._router.navigate(['/loading']);
            this._router.navigate(['/menunav',this.user_email]);
            
          }
          else
          {
            alert("Use Admin Id And Password "); 
          }
      }
        else{
          alert("unsuccesful");
        }
      }
    );
  }
}
