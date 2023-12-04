/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediakitComponent } from './mediakit.component';

describe('MediakitComponent', () => {
  let component: MediakitComponent;
  let fixture: ComponentFixture<MediakitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediakitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediakitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
