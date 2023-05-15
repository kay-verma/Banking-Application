import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword!: FormGroup;
  password: string="";
  oldPassword:string="";

  constructor(private registerService :RegisterService) { }

  ngOnInit(): void {
    this.changePassword= new FormGroup({
      password : new FormControl('',[Validators.required, Validators.minLength(10)])
    })
  }
  formSubmit(myForm: any){
    console.log(myForm.value, this.changePassword.value, this.password)
    this.registerService.changePassword(localStorage.getItem("accountNo"), this.oldPassword, this.password).subscribe((data) => console.log(data));
  }
  onLogin(){

  }

}
