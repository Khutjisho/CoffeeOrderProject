import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdersPage } from './oders.page';

describe('OdersPage', () => {
  let component: OdersPage;
  let fixture: ComponentFixture<OdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
