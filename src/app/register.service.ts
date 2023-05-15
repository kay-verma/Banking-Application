import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9000//registerRest/api";

  addRegistration(register:Register){
      return this.httpClient.post(this.baseUrl+"/register",register);
  }

  changePassword(accountNo: string, oldPassword:string, newPassword:string){
    console.log(accountNo, oldPassword, newPassword);
    return this.httpClient.get(`${this.baseUrl}/changePassword/${accountNo}/${oldPassword}/${newPassword}`)
  }
}
