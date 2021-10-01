import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHippaComponent } from './add-edit-hippa.component';

describe('AddEditHippaComponent', () => {
  let component: AddEditHippaComponent;
  let fixture: ComponentFixture<AddEditHippaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHippaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHippaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
