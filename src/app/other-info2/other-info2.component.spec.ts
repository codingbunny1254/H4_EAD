import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfo2Component } from './other-info2.component';

describe('OtherInfo2Component', () => {
  let component: OtherInfo2Component;
  let fixture: ComponentFixture<OtherInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
