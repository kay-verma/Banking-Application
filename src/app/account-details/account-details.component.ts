import { Component, OnInit } from '@angular/core';
import { AccountDetails } from '../account-details';
import { AccountDetailsService } from '../account-details.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  accdetail:AccountDetails;

  constructor(private accountDetailsService:AccountDetailsService) { }

  ngOnInit(): void {
    this.accountDetailsService.getAccountDetails(localStorage.getItem("accountNo")).subscribe((data)=>{
      this.accdetail=data as AccountDetails;
      console.log(this.accdetail);
    })
  }
}
