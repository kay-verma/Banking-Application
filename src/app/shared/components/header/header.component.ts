import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() toggleSideBarForMe : EventEmitter<any> =new EventEmitter()
  constructor(private router: Router) { }
  dateTime: Date | undefined;
  ngOnInit() { 
    this.dateTime = new Date()
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  signOut(){
    console.log("jj")
    localStorage.clear();
    this.router.navigate(['.'])
  }

}
