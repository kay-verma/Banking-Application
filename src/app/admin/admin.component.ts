import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private accountService:AdminserviceService, private router: Router) { }

  accountDetails:any;

  ngOnInit(): void {
    this.fetchNewData();
  }
  deleteRow(oldid:any){
    this.accountService.deleteAccount(oldid).subscribe((data)=>{
      this.fetchNewData()
    })
  }

  fetchNewData(){
    this.accountService.getAllAccounts().subscribe((data)=>{
      this.accountDetails=data;
    })
  }

  approveAccount(userId){
    this.accountService.approveAccount(userId).subscribe((data)=>{
      this.fetchNewData()
    })
  }
}
