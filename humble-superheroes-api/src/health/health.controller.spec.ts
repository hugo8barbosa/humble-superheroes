import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './health.controller';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('HealthCheckController', () => {
  let app: INestApplication;

  /**
   * Set up the application before each test by initializing the HealthCheckController
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController], // Define the controller to test
    }).compile();

    app = module.createNestApplication(); // Create NestJS application instance
    await app.init(); // Initialize the app
  });

  /**
   * Test the health check endpoint to ensure it returns the expected message
   */
  it('should return a welcome message on health check', async () => {
    // Make a GET request to the /health endpoint
    const response = await request(app.getHttpServer()).get('/health');

    // Assert that the response has a status of 200 (OK)
    expect(response.status).toBe(200);

    // Assert that the response body contains the expected welcome message
    expect(response.body).toEqual({
      message: 'Welcome to Humble Superheroes API!',
    });
  });

  /**
   * Close the application after all tests are done
   */
  afterAll(async () => {
    await app.close(); // Close the NestJS application
  });
});
