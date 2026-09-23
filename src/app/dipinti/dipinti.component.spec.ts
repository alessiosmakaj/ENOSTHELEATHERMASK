import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipintiComponent } from './dipinti.component';

describe('DipintiComponent', () => {
  let component: DipintiComponent;
  let fixture: ComponentFixture<DipintiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipintiComponent]
    });
    fixture = TestBed.createComponent(DipintiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
