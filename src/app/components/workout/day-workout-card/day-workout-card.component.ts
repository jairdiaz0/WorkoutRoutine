import { Component, Input } from '@angular/core';

/**Models */
import { ExerciseModel } from '@models/exercise.model';

@Component({
  selector: 'app-day-workout-card',
  imports: [],
  templateUrl: './day-workout-card.component.html',
  styleUrl: './day-workout-card.component.css'
})
export class DayWorkoutCardComponent {
  @Input() exercise?: ExerciseModel; // Información del ejercicio recibido como input.
  @Input() index: number = -1; // Información del numero de ejercicio.
}
