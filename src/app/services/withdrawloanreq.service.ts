import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {loan} from '../classes/loan';
@Injectable({
  providedIn: 'root'
})
export class WithdrawloanreqService {
  private url = 'http://localhost:3000/loan/';
  private LoanReject = 'http://localhost:3000/loanReject/';
  private deleteStatus = 'http://localhost:3000/loandelete/';
  constructor(private _http:HttpClient) { }
  getAllLoanReq(){
    return this._http.get(this.url);
  }
  updateLoanStatus(loan_id)
  {
      const head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url+loan_id,{headers:head1});
  }
  updateLoanStatusForReject(loan_id)
  {
      const head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.LoanReject+loan_id,{headers:head1});
  }
  updateRejectedLoanReason(item)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.LoanReject,body,{headers:head1});
  }
  deleteLoanReq(item:loan){
    return this._http.delete(this.url+item.loan_id);
  }
  deleteLoanFromUpdate(item:loan){
    return this._http.delete(this.deleteStatus+item.loan_status);
  }
  getAllLoanStatus(item){
    return this._http.get(this.deleteStatus+item.loan_status);
  }
}

