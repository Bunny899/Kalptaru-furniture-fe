import { Component, OnInit } from '@angular/core';
import { employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee_email:string;
  employee_password:string;
  employee_name:string;
  employee_joining_date:Date;
  employee_salary:number;
  employee_designation:string;
  employee_mobileno:number;
  employee_city:string;
  employee_gender:string;
  employee_address:string;
  employee_type:number;

  addEmployeeArray:employee[]=[];
  constructor(private _employeeservice:EmployeeService,private _router:Router) { }
  onAddEmployeeButton()
  {
    this._employeeservice.addEmployee(new employee(this.employee_email,this.employee_password,this.employee_name,this.employee_joining_date,this.employee_salary,this.employee_designation,this.employee_mobileno,this.employee_city,this.employee_gender,this.employee_address,this.employee_type)).subscribe(
        (data:any)=>{
            console.log(data);
            this.addEmployeeArray.push(new employee(this.employee_email,this.employee_password,this.employee_name,this.employee_joining_date,this.employee_salary,this.employee_designation,this.employee_mobileno,this.employee_city,this.employee_gender,this.employee_address,this.employee_type));
            alert("successfully added");
            this._router.navigate(['menunav/:user_email/employee']);  
        }
    )
  }
  BackButton()
  {
    this._router.navigate(['menunav/:user_email/employee']);  
  }
  ngOnInit() {
  }

}
