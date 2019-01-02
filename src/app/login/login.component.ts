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
  onSignup(){
    this._router.navigate(['/workersignup']);
  }
  onadd(){
    this._abc.getLoginByEmailAndPassword(new log(this.user_email,this.user_password)).subscribe(
      (data:any)=>
      {
        console.log(data);
        if(data.length == 1){
          // localStorage.setItem('user_email',this.user_email);
        //  localStorage.setItem('product_id',this.product_id);
          alert("Login Successfully"); 
           //this._router.navigate(['/product']);
          //this._router.navigate(['/category']);
          // this._router.navigate(['/employee']);
          // this._router.navigate(['/salarymanagement']);
          this._router.navigate(['/menu']);
        }
        else{
          alert("unsuccesful");
        }
      }
    );
  }
}
