/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlatillosComponent } from './platillos.component';

describe('PlatillosComponent', () => {
  let component: PlatillosComponent;
  let fixture: ComponentFixture<PlatillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
