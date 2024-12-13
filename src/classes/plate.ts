// src/classes/plate.ts

export class Plate {
    private plateNumber: string;
  
    constructor(plateNumber: string) {
      const regex = /^[A-Za-z0-9]{6,7}$/;
      if (!regex.test(plateNumber)) {
        throw new Error('Número de placa inválido');
      }
      this.plateNumber = plateNumber;
    }
  
    getLastDigit(): number {
      return parseInt(this.plateNumber.slice(-1));
    }
  
    getPlateNumber(): string {
      return this.plateNumber;
    }
  }
  