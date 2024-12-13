// src/picoYPlaca/picoYPlaca.controller.ts
// Importación de los decoradores necesarios y clases para definir el controlador
import { Controller, Get, Query } from '@nestjs/common';
import { PicoYPlacaService } from './picoYPlaca.service';
import { InputData } from '../interfaces/inputData.interface';

@Controller('pico-y-placa')@Controller('pico-y-placa')  // Especifica la ruta base para este controlador
export class PicoYPlacaController {
  // Inyección de dependencias: PicoYPlacaService para utilizar la lógica de predicción
  constructor(private readonly picoYPlacaService: PicoYPlacaService) {}

  @Get()// Inyección de dependencias: PicoYPlacaService para utilizar la lógica de predicción
  getPrediction(@Query() query: InputData): string {
    return this.picoYPlacaService.predict(query);
  }
}
