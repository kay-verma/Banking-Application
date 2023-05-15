import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {

  fromAccount: string;
  status: any = '';
  referenceID: string
  mode: string;
  paidToAccount: string;
  amount: string;
  on: string;
  remarks: string;
  message: string;

constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  const state = navigation.extras.state as {
    status: string;
    referenceID: string
    mode: string;
    paidToAccount: string;
    amount: string;
    on: string;
    remarks: string;
    fromAccount: string;
  };
  this.amount = state.amount;
  this.referenceID = state.referenceID
  this.mode = state.mode;
  this.paidToAccount = state.paidToAccount;
  if(navigation.extras.state.data.status)
    this.status = navigation.extras.state.data.status;
  this.message = navigation.extras.state.data.message;
  this.on = state.on;
  this.remarks = state.remarks;
  this.fromAccount = state.fromAccount;
  console.log(state);
  console.log(state.amount, navigation.extras.state.data) 
}

  ngOnInit(): void {
  }

}
