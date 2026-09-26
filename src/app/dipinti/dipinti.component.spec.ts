import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipintiComponent } from './dipinti.component';
import { SwipeHintDirective } from '../swipe-hint.directive';

describe('DipintiComponent', () => {
  let component: DipintiComponent;
  let fixture: ComponentFixture<DipintiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipintiComponent, SwipeHintDirective]
    });
    fixture = TestBed.createComponent(DipintiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
