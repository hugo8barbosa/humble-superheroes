import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero';

describe('SuperheroService', () => {
  let superheroService: SuperheroService;

  /**
   * Initializes the service before each test
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService],
    }).compile();

    superheroService = module.get<SuperheroService>(SuperheroService);
  });

  /**
   * Ensures the service is properly instantiated
   */
  it('should be defined', () => {
    expect(superheroService).toBeDefined();
  });

  describe('getSuperheroes', () => {
    /**
     * Ensures the superhero list is initially empty
     */
    it('should return an empty array initially', () => {
      expect(superheroService.getSuperheroes()).toEqual([]);
    });

    /**
     * Ensures superheroes are returned sorted by humility in descending order
     */
    it('should return superheroes sorted by humility descending', () => {
      const heroes: Superhero[] = [
        {
          name: 'Ant-Man',
          superpower: 'Size-changing',
          humility: 10,
          avatar: 'ant-man.png',
        },
        {
          name: 'Doctor Strange',
          superpower: 'Magic',
          humility: 5,
          avatar: 'doctor-strange.jpg',
        },
        {
          name: 'Black Panther',
          superpower: 'Agility',
          humility: 7,
          avatar: 'black-panther.jpg',
        },
      ];

      heroes.forEach((hero) => superheroService.createSuperhero(hero));

      const result = superheroService.getSuperheroes();
      expect(result).toEqual([heroes[0], heroes[2], heroes[1]]);
      expect(result[0].humility).toBeGreaterThanOrEqual(result[1].humility);
    });
  });

  describe('createSuperhero', () => {
    /**
     * Ensures a superhero is created with a generated avatar if none is provided
     */
    it('should create a superhero with a generated avatar if none is provided', () => {
      const hero: Superhero = {
        name: 'Wolverine',
        superpower: 'Healing',
        humility: 7,
        avatar: '',
      };
      const result = superheroService.createSuperhero(hero);

      expect(result.name).toBe(hero.name);
      expect(result.superpower).toBe(hero.superpower);
      expect(result.humility).toBe(hero.humility);
      expect(result.avatar).toMatch(
        /^https:\/\/avatar.iran.liara.run\/public\/\d+/,
      );
    });

    /**
     * Ensures a superhero is created with the provided avatar
     */
    it('should create a superhero with a provided avatar', () => {
      const hero: Superhero = {
        name: 'Deadpool',
        superpower: 'Regeneration',
        humility: 4,
        avatar: 'deadpool.jpg',
      };
      const result = superheroService.createSuperhero(hero);

      expect(result.avatar).toBe('deadpool.jpg');
    });
  });
});
