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

  canCirculate(): boolean {
    const restrictedDigits: number[] = this.getRestrictedDigitsForDay(this.dateTime.getDayOfWeek());
    const lastDigit = this.plate.getLastDigit();
    const isRushHour = this.dateTime.isRushHour();

    if (restrictedDigits.includes(lastDigit) && isRushHour) {
      return false; // El vehículo no puede circular por Pico y Placa durante la hora pico
    }

    return true; // El vehículo puede circular
  }

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
