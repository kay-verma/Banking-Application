import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:9000/accountRest/api";

  getAllAccounts()
  {
    return this.httpClient.get(this.baseURL+"/accounts");
  }
  deleteAccount(account:any)
  {
    return this.httpClient.delete(this.baseURL+"/accounts/"+account);
  }

  approveAccount(userId:any){
    return this.httpClient.post(this.baseURL+"/approveAccount",userId);
  }
  

}
