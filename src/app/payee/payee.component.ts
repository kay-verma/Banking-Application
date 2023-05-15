import { Component, OnInit } from '@angular/core';
import { Payee } from '../payee';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {
  fromAccount = localStorage.getItem('accountNo')
  bene:Payee;
  classExpression: string;
  confirmationMsg: string;
  showMsg: boolean = false;

  constructor(private beneservice:PayeeService) { 
    this.bene= new Payee();
  }

  ngOnInit(): void {
    
  }

  formSubmit(payeeForm:any)
  {
    this.bene.accountNo = this.fromAccount
    this.bene.beneficiaryId = Math.floor(Math.random() * 1000000000)+"";
    this.beneservice.addNewBeneficiary(this.bene).subscribe((data: any)=>{
        console.log(data);
        if(data!=null){
          this.classExpression = "green";
          this.confirmationMsg = 'Beneficiary Added Successfully';
        }
        else{
          this.classExpression = "red";
          this.confirmationMsg = 'Beneficiary creation Failed';
        }
        this.showMsg = true;
    })
    console.log(payeeForm.value)
  }

}
