import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rform3Component } from './rform3.component';

describe('Rform3Component', () => {
  let component: Rform3Component;
  let fixture: ComponentFixture<Rform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rform3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
