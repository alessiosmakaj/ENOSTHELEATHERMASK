import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMascheraComponent } from './la-maschera.component';

describe('LaMascheraComponent', () => {
  let component: LaMascheraComponent;
  let fixture: ComponentFixture<LaMascheraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaMascheraComponent]
    });
    fixture = TestBed.createComponent(LaMascheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
