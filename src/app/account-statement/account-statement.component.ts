import { Component, OnInit } from '@angular/core';
import { AccountDetailsService } from '../account-details.service';
import { PaymentService } from '../payment.service';
import { Transaction } from '../transaction';
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  closingBalance: number = 0;
  currentBalance: number = 0;
  displayedColumns: string[] = [ 'Ref No', 'Remarks', 'Date', 'From/To','Credit', 'Debit', 'Mode', 'Closing Balance'];
  dataSource = [];

  constructor(private paymentService: PaymentService, private accountDetailsService:AccountDetailsService) { }

  ngOnInit(): void {
    this.accountDetailsService.getAccountDetails(localStorage.getItem('accountNo')).subscribe((data:any)=>{
      this.currentBalance = data.accountBalance;
      this.closingBalance = data.accountBalance

      this.paymentService.getAccountStatement(localStorage.getItem('accountNo')).subscribe((data:any) => {
        this.dataSource = data.reverse()
  
        for(let i = 1; i <this.dataSource.length;i++){
          if(this.dataSource[i-1].action==="Debit")
            Object.assign(this.dataSource[i], {closingBalance: this.closingBalance+this.dataSource[i-1].amount});
          else
            Object.assign(this.dataSource[i], {closingBalance: this.closingBalance-this.dataSource[i-1].amount});
          this.closingBalance = this.dataSource[i].closingBalance;
        }
      });
  })
  }

}
