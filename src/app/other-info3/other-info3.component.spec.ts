import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfo3Component } from './other-info3.component';

describe('OtherInfo3Component', () => {
  let component: OtherInfo3Component;
  let fixture: ComponentFixture<OtherInfo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInfo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
