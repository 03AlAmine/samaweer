import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementsList } from './appointements-list';

describe('AppointementsList', () => {
  let component: AppointementsList;
  let fixture: ComponentFixture<AppointementsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointementsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointementsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
