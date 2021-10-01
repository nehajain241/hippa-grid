import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HippaGridComponent } from './hippa-grid.component';

describe('HippaGridComponent', () => {
  let component: HippaGridComponent;
  let fixture: ComponentFixture<HippaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HippaGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HippaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
