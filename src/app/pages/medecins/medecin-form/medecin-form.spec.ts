import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinForm } from './medecin-form';

describe('MedecinForm', () => {
  let component: MedecinForm;
  let fixture: ComponentFixture<MedecinForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
