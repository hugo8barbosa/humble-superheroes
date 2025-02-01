import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroModule } from './superhero.module';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from 'src/superhero/superhero.service';

describe('SuperheroModule', () => {
  let superheroController: SuperheroController;
  let superheroService: SuperheroService;

  /**
   * Sets up the testing module before each test
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SuperheroModule], // Import SuperheroModule for testing
    }).compile();

    superheroController = module.get<SuperheroController>(SuperheroController); // Get controller
    superheroService = module.get<SuperheroService>(SuperheroService); // Get service
  });

  /**
   * Ensures that both the controller and the service are defined
   */
  it('should be defined', () => {
    expect(superheroController).toBeDefined();
    expect(superheroService).toBeDefined();
  });

  describe('getSuperheroes', () => {
    /**
     * Tests that the controller correctly calls the service and returns the superheroes list
     */
    it('should return superheroes from service when getSuperheroes is called', () => {
      const mockSuperheroes = [
        {
          name: 'Iron Man',
          superpower: 'Genius',
          humility: 3,
          avatar: 'ironman.jpg',
        },
        {
          name: 'Spider-Man',
          superpower: 'Web-slinging',
          humility: 9,
          avatar: 'spiderman.jpg',
        },
      ];

      // Mock the service method
      jest
        .spyOn(superheroService, 'getSuperheroes')
        .mockReturnValue(mockSuperheroes);

      // Call controller method
      const result = superheroController.getSuperheroes();

      expect(result).toEqual(mockSuperheroes); // Assert that the result matches the mock data
    });
  });

  describe('createSuperhero', () => {
    /**
     * Tests that the controller correctly calls the service to create a new superhero
     */
    it('should create a superhero and return the superhero object', () => {
      const newHero = {
        name: 'Thor',
        superpower: 'Thunder',
        humility: 7,
        avatar: 'thor.jpg',
      };

      // Mock the service method to return the new superhero
      jest.spyOn(superheroService, 'createSuperhero').mockReturnValue(newHero);

      // Call controller method to create a new superhero
      const result = superheroController.createSuperhero(newHero);

      expect(result).toEqual(newHero); // Assert that the result matches the new hero data
    });
  });
});
