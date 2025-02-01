import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from 'src/superhero/superhero.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Superhero } from 'src/superhero/superhero';

/**
 * Controller for managing superheroes
 */
@ApiTags('Superheroes')
@Controller({ version: '1', path: '/superheroes' })
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  /**
   * Retrieves a list of superheroes sorted by humility (descending order)
   */
  @Get()
  @ApiOkResponse({
    description: 'Returns a list of superheroes sorted by humility',
    type: Superhero,
    isArray: true,
  })
  getSuperheroes(): Superhero[] {
    return this.superheroService.getSuperheroes();
  }

  /**
   * Creates a new superhero
   */
  @Post()
  @ApiOkResponse({
    description: 'Creates and returns a new superhero',
    type: Superhero,
  })
  createSuperhero(@Body() superheroDto: Superhero): Superhero {
    return this.superheroService.createSuperhero(superheroDto);
  }
}
