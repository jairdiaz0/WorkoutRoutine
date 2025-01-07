import { ExerciseModel } from "./exercise.model";

export interface WorkoutsModel {
    Lunes: Array<ExerciseModel>,
    Martes: Array<ExerciseModel>,
    Miércoles: Array<ExerciseModel>,
    Jueves: Array<ExerciseModel>,
    Viernes: Array<ExerciseModel>,
}