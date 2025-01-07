import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutContentComponent } from './workout-content.component';

describe('WorkoutContentComponent', () => {
  let component: WorkoutContentComponent;
  let fixture: ComponentFixture<WorkoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
