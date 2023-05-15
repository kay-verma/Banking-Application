import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log:Login
  errorMsg: string
  showError: boolean = false

  constructor(private loginService:LoginService, private router: Router) {this.log=new Login() }

  ngOnInit(): void {
  }


  formSubmit(loginForm:any)
  {
    console.log(loginForm.value.loginID, loginForm.value.password)
    this.loginService.addLogin(loginForm.value.loginID, loginForm.value.password).subscribe((data: any)=> {
      console.log(data)
      if(data==null){
        this.showError = true
        this.errorMsg = "Incorrect userID or Password!";
      }
      else{
        console.log(data);
        localStorage.setItem("userId", data.userid);
        localStorage.setItem("accountNo", data.accountNo);
        localStorage.setItem("firstName", data.accDetails.accountoldid.userFirstname)
        this.router.navigate(['/dashboard'])
      }
  })
    

  }
    

}
