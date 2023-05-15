import { Component, OnInit } from '@angular/core';
import { AccountDetails } from '../account-details';
import { AccountDetailsService } from '../account-details.service';
 
@Component({
 selector: 'app-account-summary',
 templateUrl: './account-summary.component.html',
 styleUrls: ['./account-summary.component.scss']
})
export class AccountSummaryComponent implements OnInit {
 panelOpenState = false;

 accdetail:AccountDetails;
 accountNo = localStorage.getItem("accountNo")
 name = localStorage.getItem("firstName")
 ifsc = ''
 type = ''
 lastName = ''
 balance = 0

 constructor(private accountDetailsService:AccountDetailsService) { }
 
 ngOnInit(): void {
    this.accountDetailsService.getAccountDetails(this.accountNo).subscribe((data:any)=>{
        console.log(data)
        this.lastName = data.accountoldid.userLastname;
        this.accdetail = data as AccountDetails;
        this.ifsc = this.accdetail.userIfscCode
        this.type = this.accdetail.accountType
        this.balance = this.accdetail.accountBalance
    })
 }
 
}
 

