import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmationMsg: string = "Your request for account creation has been sent for approval";
  reg:Register;
  showMsg = false;
  classExpression = "green"

  constructor(private registerService:RegisterService) { this.reg=new Register()}

  formSubmit(regForm:any)
  {
    this.registerService.addRegistration(this.reg).subscribe((data: any)=>{
      console.log(data);
      if(data.accDetails!=null){
        this.classExpression = "green";
        this.confirmationMsg = "Netbanking Account Created";
      }
      else{
        this.classExpression = "red";
        this.confirmationMsg = "Account Creation Failed";
      }
      this.showMsg = true;
    })
    console.log(regForm.value)
    
  }

  ngOnInit(): void {
   
  }

}
