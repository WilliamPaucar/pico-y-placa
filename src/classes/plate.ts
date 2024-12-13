// src/classes/plate.ts

export class Plate {
    private plateNumber: string;
  // directamente en el constructor comprobamos si el numero de placa es valido 
    constructor(plateNumber: string) {
      this.plateNumber = plateNumber;

      // Si no es válida, lanza un error
      if (!this.isValid()) {
        throw new Error('Número de placa inválido');
      }
    }
  // metodo obtener el ultimo digito de la placa
  getLastDigit(): number {
    return parseInt(this.plateNumber.slice(-1));
  }
  
  // metodo obtener el numero de placa
    getPlateNumber(): string {
      return this.plateNumber;
    }
      // Método isValid para comprobar si el número de placa tiene un formato válido
  isValid(): boolean {
    // Expresión regular para validar placas de 6 a 7 caracteres alfanuméricos
    // 3 letras seguidas de 3 a 4 números
    const regex = /^[A-Za-z]{3}[0-9]{4}$/;  // Ejemplo: ABC123 (3 letras y 3 números)
const regexAlternate = /^[A-Za-z]{2}[0-9]{4}$/;  // Ejemplo: AB1234 (2 letras y 4 números)

    // Retorna true si la placa coincide con uno de los formatos, false si no
    return regex.test(this.plateNumber) || regexAlternate.test(this.plateNumber);
  }
  }
  