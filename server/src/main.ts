import { config } from 'dotenv';

config({
  override: true,
});

import { NestFactory } from '@nestjs/core';
import { environmentConfig } from './environment/environment.config';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environmentConfig.port, () => {
    console.log('Server is running on port ' + environmentConfig.port);
  });
}
bootstrap();
