import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Superhero } from './superhero';

describe('Superhero', () => {
  /**
   * Validates that a superhero instance with correct properties passes validation.
   */
  it('should pass validation when all properties are correct', async () => {
    const superhero = new Superhero();
    superhero.name = 'Iron Man';
    superhero.superpower = 'Genius';
    superhero.humility = 8;
    superhero.avatar = 'ironman.jpg';

    const errors = await validate(superhero);
    expect(errors.length).toBe(0);
  });

  /**
   * Ensures validation fails when the name is empty.
   */
  it('should fail validation when name is empty', async () => {
    const superhero = new Superhero();
    superhero.name = '';
    superhero.superpower = 'Genius';
    superhero.humility = 8;
    superhero.avatar = 'ironman.jpg';

    const errors = await validate(superhero);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('name');
    expect(errors[0].constraints.isNotEmpty).toBeDefined();
  });

  /**
   * Ensures validation fails when humility is greater than the allowed max (10).
   */
  it('should fail validation when humility is out of bounds', async () => {
    const superhero = new Superhero();
    superhero.name = 'Iron Man';
    superhero.superpower = 'Genius';
    superhero.humility = 11; // Invalid value
    superhero.avatar = 'ironman.jpg';

    const errors = await validate(superhero);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('humility');
    expect(errors[0].constraints.max).toEqual(
      'humility must not be greater than 10',
    );
  });

  /**
   * Ensures the `avatar` property is trimmed of spaces during transformation.
   */
  it('should transform avatar to trim spaces', async () => {
    const superhero = new Superhero();
    superhero.name = 'Iron Man';
    superhero.superpower = 'Genius';
    superhero.humility = 8;
    superhero.avatar = '   ironman.jpg  ';

    const transformedSuperhero = plainToClass(Superhero, superhero);
    const errors = await validate(transformedSuperhero);

    expect(transformedSuperhero.avatar).toBe('ironman.jpg');
    expect(errors.length).toBe(0);
  });

  /**
   * Ensures validation fails when `avatar` is not a string.
   */
  it('should fail validation when avatar is not a string', async () => {
    const superhero = new Superhero();
    superhero.name = 'Iron Man';
    superhero.superpower = 'Genius';
    superhero.humility = 8;
    // @ts-expect-error: Intentionally assigning a number to test validation
    superhero.avatar = 123;

    const errors = await validate(superhero);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('avatar');
    expect(errors[0].constraints.isString).toBeDefined();
  });
});
