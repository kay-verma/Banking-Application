import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BnNgIdleService } from 'bn-ng-idle';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private bnIdle: BnNgIdleService, private fb: FormBuilder) {
 
  }
  SetNewPassword = this.fb.group({
    oldPassword:[''],
    newPassword:[''],
    confirmPassword:[''],

  },
  {validator:PasswordValidator});
  
  title = 'dashboard';
  ngOnInit(): void {
    this.bnIdle.startWatching(600).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.bnIdle.stopTimer();
        localStorage.clear();
        window.location.href = 'http://localhost:4200/';
      }
    });
  }
}
