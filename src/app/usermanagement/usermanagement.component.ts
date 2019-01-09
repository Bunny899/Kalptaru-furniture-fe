import { Component, OnInit,ViewChild } from '@angular/core';
import { user } from '../classes/user_tbl';
import { UsermanagementService } from '../services/usermanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
   user_email:String;
   user_password:String;
   user_name:String;
   user_mobileno:number;
   user_city:String;
   user_gender:String;
   user_address:String;
   user_type:number;

   user:user[]=[];
   deleteUserArray:user[]=[];
  constructor(private _userservice:UsermanagementService,private _router:Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [ 'user_name','user_city','user_gender','Action'];
  dataSource=new MatTableDataSource(this.user);

  ngOnInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    this._userservice.getAllUser().subscribe(
      (data:any)=>{
        console.log(this.user_name);
        this.user=data;
        this.dataSource.data=this.user; 
      }
    );
  }
  UpdateUser(item:user)
  {
    console.log(item.user_email)
    this._router.navigate(['menunav/:user_email/updateuser',item.user_email]);  
  }
   DeleteUser(item)
   {
     this._userservice.deleteUser(item).subscribe(
       (data:any)=>{
         console.log(data);
         this.deleteUserArray.splice(this.deleteUserArray.indexOf(item),1);
         this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);
         console.log(this.dataSource.data);
         this.dataSource.data=this.user; 
       }
     )
   }

}
