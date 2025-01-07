import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

/**Models */
import { DayModel } from '@models/day.model';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NgFor
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() daySelected = new EventEmitter<DayModel>();

  ngOnInit(): void {
    this.selectDay(this.days[0]);
  }

  days: Array<DayModel> = [
    { name: 'Lunes', type: 'Pecho y tríceps' },
    { name: 'Martes', type: 'Espalda y bíceps' },
    { name: 'Miércoles', type: 'Pierna y abdomen' },
    { name: 'Jueves', type: 'Hombros y trapecios' },
    { name: 'Viernes', type: 'Cuerpo completo' },
  ];

  selectedDay: DayModel | undefined = undefined;

  selectDay(day: DayModel | undefined) {
    this.selectedDay = day;
    if (!day) {
      return;
    }
    this.daySelected.emit(this.selectedDay);
  }

  isSelectedDay(day: DayModel | undefined) {
    return this.selectedDay == day;
  }
}
