import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Openaccount } from './openaccount';
 
@Injectable({
  providedIn: 'root'
})
export class OpenaccountService {
 
  constructor(private httpClient: HttpClient) {
   }
 
  baseURL: string = "http://localhost:9000/accountRest/api";
 
  addNewAccount(openaccount:Openaccount){
    console.log(openaccount)
    return this.httpClient.post(this.baseURL+"/accounts",openaccount);
  }
}
 

