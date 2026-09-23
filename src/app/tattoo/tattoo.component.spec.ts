import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooComponent } from './tattoo.component';

describe('TattooComponent', () => {
  let component: TattooComponent;
  let fixture: ComponentFixture<TattooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TattooComponent]
    });
    fixture = TestBed.createComponent(TattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
