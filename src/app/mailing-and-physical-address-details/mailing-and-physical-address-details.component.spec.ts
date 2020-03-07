import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingAndPhysicalAddressDetailsComponent } from './mailing-and-physical-address-details.component';

describe('MailingAndPhysicalAddressDetailsComponent', () => {
  let component: MailingAndPhysicalAddressDetailsComponent;
  let fixture: ComponentFixture<MailingAndPhysicalAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingAndPhysicalAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingAndPhysicalAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
