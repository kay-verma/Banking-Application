import { Component, OnInit } from '@angular/core';
import { OpenaccountService } from '../open-account.service';
import { Openaccount } from '../openaccount';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit {
  openacc:Openaccount;
  confirmationMsg:string = 'Your request for account creation has been sent for approval';
  classExpression = "green"
  showMsg: boolean = false;

  constructor(private openaccountService:OpenaccountService) {
    this.openacc=new Openaccount();
    }
 
  
  ngOnInit(): void {
    this.openacc.userTitle="Title";
    this.openacc.userOccupationType="Occupation Type"
    this.openacc.userGrossannualincome="Gross Annual Income"
    this.openacc.counter = 0;
    this.openacc.userisLocked = false;
    this.openacc.userisVerified = false
  }
  formSubmit(openaccountForm:any)
  {
    console.log(openaccountForm.value)
    openaccountForm.value.oldid = Math.floor(100000 + Math.random() * 900000);
    this.openaccountService.addNewAccount(openaccountForm.value)
    .subscribe((data: any)=>{
      if(data.oldid!=null){
        this.classExpression = "green";
        this.confirmationMsg = 'Your request for account creation has been sent for approval';
      }
      else{
        this.classExpression = "red";
        this.confirmationMsg = 'Account Creation Failed';
      }
      this.showMsg = true;
      this.openacc=new Openaccount()
   
  })
  
}
}
 
// constructor(private beneservice:PayeeService) { 
//   this.bene= new Payee();
// }
 
// ngOnInit(): void {
  
// }
 
// formSubmit(payeeForm:any)
// {
//   alert("It worked")
//   this.beneservice.addNewBeneficiary(this.bene).subscribe(
//     (data)=>{
//       console.log("Return Value from REST"+data);
//     }
//   )
//   console.log(payeeForm.value)
// }
 
// }

