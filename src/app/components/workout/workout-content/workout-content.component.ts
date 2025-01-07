import { NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

/**Components Workout */
import { DayWorkoutCardComponent } from '@components-workout/day-workout-card/day-workout-card.component';

/**Models */
import { ExerciseModel } from '@models/exercise.model';
import { DayModel } from '@models/day.model';
import { WorkoutsModel } from '@models/workouts.model';

@Component({
  selector: 'app-workout-content',
  imports: [
    NgIf,
    NgFor,
    DayWorkoutCardComponent
  ],
  templateUrl: './workout-content.component.html',
  styleUrl: './workout-content.component.css'
})
export class WorkoutContentComponent {
  @Input() selectedDay?: DayModel; // Día seleccionado desde el padre.
  @Input() workouts?: WorkoutsModel;

  exercises: Array<ExerciseModel> = []; // Lista de ejercicios.

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDay'] && this.selectedDay) {
      this.loadExercisesForDay(this.selectedDay);
    }
  }

  private loadExercisesForDay(day: DayModel) {
    if (!this.workouts) {
      return;
    }
    const { name } = day;
    this.exercises = this.workouts[name as keyof WorkoutsModel] || [];
  }
}
