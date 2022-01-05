import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rform2Component } from './rform2.component';

describe('Rform2Component', () => {
  let component: Rform2Component;
  let fixture: ComponentFixture<Rform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
