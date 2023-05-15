import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9000/registerRest/api";

  addLogin(userid, password){
      return this.httpClient.get(this.baseUrl+"/login/"+userid+"/"+password); 
  }
}
