import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminlogin } from './AdminLogin';
 
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
 
  constructor(private httpClient:HttpClient) { }
 
  baseUrl:string="http://localhost:9000/adminRest/api";
 
  addAdminLogin(adminId: string, adminPwd: string){
    console.log(adminId,adminPwd);
    return this.httpClient.get(`${this.baseUrl}/admin/${adminId}/${adminPwd}`)
  }
}
