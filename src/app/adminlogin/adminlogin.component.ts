import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../admin-login.service';
import { Adminlogin } from '../AdminLogin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adlog:Adminlogin
  errorMsg: string
  showError: boolean = false;

  constructor(private adminloginService:AdminloginService, private router: Router) {this.adlog=new Adminlogin }
 
  ngOnInit(): void {
  }
 
  formSubmit(adminloginForm:any)
  {
    console.log(adminloginForm.value.adminID, adminloginForm.value.password)
    this.adminloginService.addAdminLogin(adminloginForm.value.adminID, adminloginForm.value.password).subscribe((data)=> {
      if(data==true) {
        localStorage.setItem("adminId", "402");
        this.router.navigate(['/admin'])
      }
      else{
          this.showError = true
          this.errorMsg = "Incorrect adminID or Password!";
      }
    })
  }


}
