import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9000/accountdetailsRest/api";
  
  getAccountDetails(userId){
    return this.httpClient.get(`${this.baseUrl}/accountdetails/${userId}`);
  }
}
