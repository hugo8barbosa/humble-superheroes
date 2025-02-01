import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero';

describe('SuperheroController', () => {
  let superheroController: SuperheroController;
  let superheroService: SuperheroService;

  // Sample superheroes for mocking
  const mockSuperheroes: Superhero[] = [
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
    { name: 'Thor', superpower: 'Thunder', humility: 7, avatar: 'thor.jpg' },
  ];

  /**
   * Setup test environment by mocking service methods and defining controller and service
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [
        {
          provide: SuperheroService,
          useValue: {
            getSuperheroes: jest.fn().mockReturnValue(
              mockSuperheroes.sort((a, b) => b.humility - a.humility), // Mock sorted heroes
            ),
            createSuperhero: jest.fn().mockImplementation((data) => data), // Mock creation of superhero
          },
        },
      ],
    }).compile();

    superheroController = module.get<SuperheroController>(SuperheroController);
    superheroService = module.get<SuperheroService>(SuperheroService);
  });

  /**
   * Verifies that the controller is defined
   */
  it('should be defined', () => {
    expect(superheroController).toBeDefined();
  });

  describe('getSuperheroes', () => {
    /**
     * Tests that the superheroes are returned sorted by humility in descending order
     */
    it('should return a list of superheroes sorted by humility descending', () => {
      const result = superheroController.getSuperheroes();
      expect(result).toEqual(mockSuperheroes); // Assert the result matches the mock data
      expect(result[0].humility).toBeGreaterThanOrEqual(result[1].humility); // Assert sorted by humility
    });

    /**
     * Verifies that the service method getSuperheroes is called once
     */
    it('should call service method getSuperheroes once', () => {
      superheroController.getSuperheroes();
      expect(superheroService.getSuperheroes).toHaveBeenCalledTimes(1); // Assert it is called once
    });
  });

  describe('createSuperhero', () => {
    /**
     * Tests that a superhero is created and returned correctly
     */
    it('should create and return a superhero', () => {
      const newHero: Superhero = {
        name: 'Captain America',
        superpower: 'Shield',
        humility: 8,
        avatar: 'captain.png',
      };
      const result = superheroController.createSuperhero(newHero);
      expect(result).toEqual(newHero); // Assert that the created superhero matches the input
    });

    /**
     * Verifies that the service method createSuperhero is called once with the correct data
     */
    it('should call service method createSuperhero once', () => {
      const newHero: Superhero = {
        name: 'Hulk',
        superpower: 'Strength',
        humility: 6,
        avatar: 'hulk.png',
      };
      superheroController.createSuperhero(newHero);
      expect(superheroService.createSuperhero).toHaveBeenCalledWith(newHero); // Assert correct data passed
      expect(superheroService.createSuperhero).toHaveBeenCalledTimes(1); // Assert called once
    });
  });
});
