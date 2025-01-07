import { Component } from '@angular/core';

/**Components */
import { NavBarComponent } from '@components-shared/nav-bar/nav-bar.component';
import { WorkoutContentComponent } from "@components-workout/workout-content/workout-content.component";

/**Models */
import { WorkoutsModel } from '@models/workouts.model';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    WorkoutContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-workout-routine';

  selectedDay: any = undefined; // Día inicial.

  onDaySelected(day: any) {
    this.selectedDay = day;
  }

  // Datos de ejemplo para cada día
  workouts: WorkoutsModel = {
    Lunes: [
      { name: 'Press banca con barra o mancuerna', reps: '6-8', sets: 4, rest: '90-120 seg' },
      { name: 'Press inclinado con mancuernas', reps: '10-12', sets: 4, rest: '90 seg' },
      { name: 'Peck deck (contractora)', reps: '12-15', sets: 4, rest: '60-90 seg' },
      { name: 'Fondos en paralelas', reps: 'Al fallo', sets: 3, rest: '90 seg' },
      { name: 'Extensión con cuerda (tríceps)', reps: '12-15', sets: 4, rest: '45-60 seg' },
      { name: 'Rompe cráneo', reps: '10-12', sets: 3, rest: '60 seg' },
      { name: 'Cardio moderado', reps: '40 minutos', sets: 1, rest: '' },
    ],
    Martes: [
      { name: 'Dominadas con peso o al fallo', reps: '6-8', sets: 4, rest: '90-120 seg' },
      { name: 'Remo con barra o mancuerna', reps: '8-10', sets: 4, rest: '90 seg' },
      { name: 'Jalón con triángulo', reps: '10-12', sets: 4, rest: '60 seg' },
      { name: 'Jalón para dorsal (agarre supinado)', reps: '12-15', sets: 4, rest: '60 seg' },
      { name: 'Curl de bíceps con barra', reps: '8-10', sets: 4, rest: '90 seg' },
      { name: 'Martillo con mancuerna', reps: '10-12', sets: 3, rest: '60 seg' },
      { name: 'Dominadas agarre neutro', reps: 'Al fallo', sets: 3, rest: '90 seg' },
      { name: 'Cardio moderado', reps: '40 minutos', sets: 1, rest: '' },
    ],
    Miércoles: [
      { name: 'Sentadilla hack', reps: '10-12', sets: 3, rest: '60 seg' },
      { name: 'Press de pierna', reps: '8-10', sets: 4, rest: '90 seg' },
      { name: 'Hip thrust', reps: '8-12', sets: 4, rest: '90 seg' },
      { name: 'Curl de isquiotibiales sentado', reps: '10-12', sets: 4, rest: '60 seg' },
      { name: 'Curl de isquiotibiales tumbado', reps: '12-15', sets: 3, rest: '60 seg' },
      { name: 'Máquina de abductores', reps: '12-15', sets: 4, rest: '60 seg' },
      { name: 'Rueda abdominal', reps: 'Al fallo', sets: 4, rest: '45 seg' },
      { name: 'Plancha (con variación dinámica)', reps: '30-60 seg', sets: 3, rest: '30-45 seg' },
      { name: 'Cardio moderado', reps: '40 minutos', sets: 1, rest: '' },
    ],
    Jueves: [
      { name: 'Press militar (barra o mancuerna)', reps: '6-8', sets: 4, rest: '90-120 seg' },
      { name: 'Press maquina', reps: '8-10', sets: 4, rest: '90 seg' },
      { name: 'Elevaciones laterales', reps: '12-15', sets: 4, rest: '45-60 seg' },
      { name: 'Pájaros (deltoides posteriores)', reps: '12-15', sets: 4, rest: '45-60 seg' },
      { name: 'Remo al mentón con barra o polea', reps: '10-12', sets: 3, rest: '60-90 seg' },
      { name: 'Encogimientos con mancuernas', reps: '12-15', sets: 4, rest: '60 seg' },
      { name: 'Face pulls (tirón a la cara con cuerda)', reps: '12-15', sets: 3, rest: '60 seg' },
      { name: 'Cardio moderado', reps: '40 minutos', sets: 1, rest: '' },
    ],
    Viernes: [
      { name: 'Peso muerto (convencional o sumo)', reps: '6-8', sets: 4, rest: '120 seg' },
      { name: 'Sentadilla frontal con barra o mancuerna', reps: '8-10', sets: 4, rest: '90 seg' },
      { name: 'Press banca inclinado', reps: '8-10', sets: 4, rest: '90 seg' },
      { name: 'Dominadas pronadas', reps: 'Al fallo', sets: 4, rest: '90-120 seg' },
      { name: 'Remo con barra o máquina', reps: '10-12', sets: 4, rest: '90 seg' },
      { name: 'Clean and press (barra o mancuerna)', reps: '8-10', sets: 3, rest: '90 seg' },
      { name: 'Plancha (con variación dinámica)', reps: '30-60 seg', sets: 3, rest: '30 seg' },
      { name: 'Abdominales con cable', reps: '12-15', sets: 3, rest: '45 seg' },
      { name: 'Cardio moderado', reps: '40 minutos', sets: 1, rest: '' },
    ],
  };
}
