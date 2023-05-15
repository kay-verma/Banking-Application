import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9000/accountRest/api";

  createAccount() {

  }

}
