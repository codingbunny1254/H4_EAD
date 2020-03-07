import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingandPhysicalAddressComponent } from './mailingand-physical-address.component';

describe('MailingandPhysicalAddressComponent', () => {
  let component: MailingandPhysicalAddressComponent;
  let fixture: ComponentFixture<MailingandPhysicalAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingandPhysicalAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingandPhysicalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
