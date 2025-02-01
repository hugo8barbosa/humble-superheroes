import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { HealthCheckController } from 'src/health/health.controller';
import { SuperheroController } from 'src/superhero/superhero.controller';

describe('AppModule', () => {
  let app: TestingModule;
  let healthCheckController: HealthCheckController;
  let superheroController: SuperheroController;

  /**
   * Set up the application and controllers before each test
   */
  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule], // Import the main app module
    }).compile();

    // Get instances of the controllers from the app module
    healthCheckController = app.get<HealthCheckController>(
      HealthCheckController,
    );
    superheroController = app.get<SuperheroController>(SuperheroController);
  });

  /**
   * Test to check if the AppModule is defined correctly
   */
  it('should be defined', () => {
    expect(app).toBeDefined(); // Check if the app is correctly initialized
  });

  /**
   * Test to ensure HealthCheckController is defined
   */
  it('should have HealthCheckController defined', () => {
    expect(healthCheckController).toBeDefined(); // Check if the health check controller exists
  });

  /**
   * Test to ensure SuperheroController is defined
   */
  it('should have SuperheroController defined', () => {
    expect(superheroController).toBeDefined(); // Check if the superhero controller exists
  });

  describe('HealthCheckController', () => {
    /**
     * Test to verify the health check message returned by the controller
     */
    it('should return a health check message', () => {
      const result = healthCheckController.healthCheck(); // Call the health check method
      expect(result).toEqual({ message: 'Welcome to Humble Superheroes API!' }); // Check if the message is correct
    });
  });
});
