import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Habilitar CORS globalmente
   app.enableCors({
    origin: 'http://127.0.0.1:5500', // Asegúrate de poner la URL de tu frontend
    methods: 'GET, POST, PUT, DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeceras permitidas
  });
  await app.listen(3000);
}
bootstrap();
