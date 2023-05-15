import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payee } from './payee';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {


  constructor(private httpClient: HttpClient) { }
  baseUrl:string = "http://localhost:9000/payment/api";

  addNewBeneficiary(beneficiary:Payee)
  {
    return this.httpClient.post(this.baseUrl+"/addBeneficiary",beneficiary);
  }

  deleteBeneficiary(beneficiary:any)
  {
    return this.httpClient.delete(this.baseUrl+"/beneficiaries/"+beneficiary);
  }
}
