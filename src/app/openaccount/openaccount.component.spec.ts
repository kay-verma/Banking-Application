import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaccountComponent } from './openaccount.component';

describe('OpenaccountComponent', () => {
  let component: OpenaccountComponent;
  let fixture: ComponentFixture<OpenaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
