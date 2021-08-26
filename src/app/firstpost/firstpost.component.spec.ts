import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpostComponent } from './firstpost.component';

describe('FirstpostComponent', () => {
  let component: FirstpostComponent;
  let fixture: ComponentFixture<FirstpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
