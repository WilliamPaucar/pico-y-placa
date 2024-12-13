// src/classes/dateTime.ts

export class DateTime {
    private date: Date;
  
    constructor(date: string, time: string) {
      const [year, month, day] = date.split('-').map((part) => parseInt(part, 10));
      const [hours, minutes] = time.split(':').map((part) => parseInt(part, 10));
      // comprobamos que la fecha y hora sean validas
      if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hours) || isNaN(minutes)) {
        throw new Error('Fecha u hora inválida');
      }
  
      this.date = new Date(year, month - 1, day, hours, minutes);
    }
    // Metodo para verificar si es hora pico
    isRushHour(): boolean {
      const hours = this.date.getHours();
      const minutes = this.date.getMinutes();
  
      // Definimos el rango de horas pico
      // Rango de hora pico: 6:00 a 9:30 y 17:00 a 21:00
      // Verificamos si la hora está entre 6:30 y 9:30
      if ((hours === 6 && minutes >= 30) || (hours > 6 && hours < 9) || (hours === 9 && minutes <= 30)) {
        console.log('HORARIO PICO DE 6:00 A 9:30');
        return true;
      }else if (
        // Dentro del rango de 17:00 a 21:00
        (hours === 17 && minutes >= 0) ||          // De 17:00 a 17:59
        (hours > 17 && hours < 21) ||               // De 18:00 a 20:59
        (hours === 21 && minutes === 0)            // De 21:00 exactamente
      ) {return true;
      }
      return false;
    }
  
    getDayOfWeek(): number {
      return this.date.getDay();
    }
  }
  