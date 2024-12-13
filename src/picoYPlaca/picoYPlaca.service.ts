// src/picoYPlaca/picoYPlaca.service.ts
import { Injectable } from '@nestjs/common';
import { Plate } from '../classes/plate';
import { DateTime } from '../classes/dateTime';
import { PicoYPlaca } from '../classes/picoYPlaca';
import { InputData } from '../interfaces/inputData.interface';

@Injectable()
export class PicoYPlacaService {
  // el metodo predict que recibe los datos de entrada y devuelve un mensaje indicando si el vehículo puede circular o no
  predict(inputData: InputData): string {
    const plate = new Plate(inputData.plate);
    const dateTime = new DateTime(inputData.date, inputData.time);
    const picoYPlaca = new PicoYPlaca(plate, dateTime);
    const message = 'EL VEHICULO CON NUMERO DE PLACA'
    if (picoYPlaca.canCirculate()) {
      return `${message} ${inputData.plate} PUEDE CIRCULAR.`;
    } else {
      return `${message} ${inputData.plate} NO PUEDE CIRCULAR.`;
    }
  }
}
