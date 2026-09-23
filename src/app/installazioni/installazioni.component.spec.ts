import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallazioniComponent } from './installazioni.component';

describe('InstallazioniComponent', () => {
  let component: InstallazioniComponent;
  let fixture: ComponentFixture<InstallazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallazioniComponent]
    });
    fixture = TestBed.createComponent(InstallazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
