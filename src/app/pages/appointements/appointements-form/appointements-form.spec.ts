import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementsForm } from './appointements-form';

describe('AppointementsForm', () => {
  let component: AppointementsForm;
  let fixture: ComponentFixture<AppointementsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointementsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointementsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
