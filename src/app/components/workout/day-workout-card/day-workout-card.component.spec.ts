import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWorkoutCardComponent } from './day-workout-card.component';

describe('DayWorkoutCardComponent', () => {
  let component: DayWorkoutCardComponent;
  let fixture: ComponentFixture<DayWorkoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayWorkoutCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayWorkoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
