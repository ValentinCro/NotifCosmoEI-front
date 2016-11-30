/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogingComponent } from './loging.component';

describe('LogingComponent', () => {
  let component: LogingComponent;
  let fixture: ComponentFixture<LogingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
