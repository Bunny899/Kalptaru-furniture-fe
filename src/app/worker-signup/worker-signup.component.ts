import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/worker_signup.service';
import { sign } from '../classes/worker_signup';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-worker-signup',
  templateUrl: './worker-signup.component.html',
  styleUrls: ['./worker-signup.component.css']
})
export class WorkerSignupComponent implements OnInit {
  user_email:string;
  user_password:string;
  user_name:string;
  user_mobileno:number;
  user_city:string;
  user_gender:string;
  user_address:string;
  user_type:number;
  workerAddArray:sign[]=[];
  constructor(private _xyz:SignupService,private _router:Router) { }

  ngOnInit() {
  }
  onadd(){

    this._xyz.WorkerSignup(new sign(this.user_email, this.user_password, this.user_name, this.user_mobileno, this.user_city, this.user_gender,this.user_address,this.user_type)).subscribe(
      (data: any) => {
        console.log(data);
        this.workerAddArray.push(new sign(this.user_email, this.user_password, this.user_name, this.user_mobileno, this.user_city, this.user_gender,this.user_address,this.user_type));
        alert('sucessfully added');
        this._router.navigate(['/']);
      }
    );
    }
}
