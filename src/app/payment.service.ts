import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beneficiary } from './beneficiary';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:9000/payment/api";


  getAllBeneficiaries(user_acc_no: string){
    return this.httpClient.get(`${this.baseURL}/beneficiaries/${user_acc_no}`)
  }

  addNewBeneficiary(beneficiary:Beneficiary)
  {
    return this.httpClient.post(this.baseURL+"/beneficiaries",beneficiary);
  }

  deleteBeneficiary(user_acc_no: string){
    return this.httpClient.delete(`${this.baseURL}/deleteBeneficiaries/${user_acc_no}`)
  }

  requestOTP(user_acc_no: string, message: string){
    return this.httpClient.get(`${this.baseURL}/requestOTP/${user_acc_no}/${message}`)
  }

  pay(transaction: Transaction, transId: string){
    return this.httpClient.post(`${this.baseURL}/pay/${transId}`,  transaction)
  }

  forgotPassword(user_acc_no: string, password: string){
    return this.httpClient.put(`http://localhost:9000/registerRest/api/forgotPassword/${user_acc_no}/${password}`, user_acc_no)
  }

  forgotUID(user_acc_no: string){
    return this.httpClient.put(`http://localhost:9000/registerRest/api/forgotUid/${user_acc_no}`, user_acc_no)
  }

  getAccountStatement(user_acc_no: string){
    return this.httpClient.get(`${this.baseURL}/getAccountStatement/${user_acc_no}`);
  }

}
