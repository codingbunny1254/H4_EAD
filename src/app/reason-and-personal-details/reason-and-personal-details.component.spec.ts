import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonAndPersonalDetailsComponent } from './reason-and-personal-details.component';

describe('ReasonAndPersonalDetailsComponent', () => {
  let component: ReasonAndPersonalDetailsComponent;
  let fixture: ComponentFixture<ReasonAndPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonAndPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonAndPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
