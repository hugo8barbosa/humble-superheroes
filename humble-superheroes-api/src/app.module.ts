import { Module } from '@nestjs/common';
import { HealthCheckController } from 'src/health/health.controller';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
  /**
   * Import other modules that are required by this module
   * Here, we import the SuperheroModule to handle superhero-related logic
   */
  imports: [SuperheroModule],

  /**
   * Define controllers for the module
   * In this case, the HealthCheckController handles the health check endpoint
   */
  controllers: [HealthCheckController],
})
export class AppModule {}
