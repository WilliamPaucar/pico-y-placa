// src/classes/dateTime.ts

export class DateTime {
    private date: Date;
  
    constructor(date: string, time: string) {
      const [year, month, day] = date.split('-').map((part) => parseInt(part, 10));
      const [hours, minutes] = time.split(':').map((part) => parseInt(part, 10));
  
      if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hours) || isNaN(minutes)) {
        throw new Error('Fecha u hora inválida');
      }
  
      this.date = new Date(year, month - 1, day, hours, minutes);
    }
  
    isRushHour(): boolean {
      const hours = this.date.getHours();
      const minutes = this.date.getMinutes();
  
      // Definimos el rango de horas pico
      // Rango de hora pico: 6:00 a 9:30 y 17:00 a 21:00
      // Verificamos si la hora está entre 6:30 y 9:30
      if ((hours === 6 && minutes >= 30) || (hours > 6 && hours < 9) || (hours === 9 && minutes <= 30)) {
        console.log('HORARIO PICO DE 6:00 A 9:30');
        return true;
      }
      return false;
    }
  
    getDayOfWeek(): number {
      return this.date.getDay();
    }
  }
  