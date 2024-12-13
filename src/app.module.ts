import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PicoYPlacaController } from './picoYPlaca/picoYPlaca.controller';
import { PicoYPlacaService } from './picoYPlaca/picoYPlaca.service';

@Module({
  imports: [],
  controllers: [PicoYPlacaController],
  providers: [PicoYPlacaService],
})
export class AppModule {}
