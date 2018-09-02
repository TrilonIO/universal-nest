import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

enableProdMode();

const CORS_OPTIONS = {
  methods: 'GET',
  maxAge: 3600
};

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors(CORS_OPTIONS);
  await app.listen(4000);
}
bootstrap().catch(err => console.error(err));
