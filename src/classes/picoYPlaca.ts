// src/classes/picoYPlaca.ts
import { Plate } from './plate';
import { DateTime } from './dateTime';

export class PicoYPlaca {
  private plate: Plate;
  private dateTime: DateTime;

  constructor(plate: Plate, dateTime: DateTime) {
    this.plate = plate;
    this.dateTime = dateTime;
  }
// Metodo para comprobar si puede o no cirular el auto
  canCirculate(): boolean {
    const restrictedDigits: number[] = this.getRestrictedDigitsForDay(this.dateTime.getDayOfWeek());
    const lastDigit = this.plate.getLastDigit();
    const isRushHour = this.dateTime.isRushHour();
    // comprobamos si el vehiculo tiene restriccion pico y placa y hora pico
    if (restrictedDigits.includes(lastDigit) && isRushHour) {
      return false; //vehículo no puede circular por Pico y Placa durante la hora pico
    }

    return true; // El vehículo puede circular
  }

// metodo para determinar si el ultimo el vehiculo tiene restriccion 
  private getRestrictedDigitsForDay(dayOfWeek: number): number[] {
    const rules: { [key: number]: number[] } = {
      1: [1, 2],
      2: [3, 4],
      3: [5, 6],
      4: [7, 8],
      5: [9, 0],
    };

    return rules[dayOfWeek] || [];
  }
}
