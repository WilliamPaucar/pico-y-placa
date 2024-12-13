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
      return (
        (hours >= 6 && hours < 9 && minutes >= 30) || (hours >= 17 && hours < 21)
      );
    }
  
    getDayOfWeek(): number {
      return this.date.getDay();
    }
  }
  