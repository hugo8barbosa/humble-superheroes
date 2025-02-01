import { Module } from '@nestjs/common';
import { SuperheroService } from 'src/superhero/superhero.service';
import { SuperheroController } from './superhero.controller';

/**
 * Module responsible for managing superheroes
 */
@Module({
  providers: [SuperheroService],
  controllers: [SuperheroController],
  exports: [SuperheroService],
})
export class SuperheroModule {}
