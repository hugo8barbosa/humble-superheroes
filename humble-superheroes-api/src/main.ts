import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Set the port from environment variables, defaulting to 3333
  const port = process.env.PORT || 3333;

  // Create the NestJS application using the AppModule
  const app = await NestFactory.create(AppModule);

  // Enable versioning of the API with the default version being '1'
  // The version is part of the URL (e.g., /v1/endpoint)
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  // Set a global API prefix 'api' for all routes except '/health'
  app.setGlobalPrefix('api', {
    exclude: ['/health'], // Exclude the health check route from the prefix
  });

  // Use global validation pipe to automatically validate incoming requests
  app.useGlobalPipes(new ValidationPipe());

  // Enable Cross-Origin Resource Sharing (CORS) for all origins
  app.enableCors();

  // Configure Swagger for API documentation
  const docConfig = new DocumentBuilder()
    .setTitle('Humble Superheroes Service') // Set the title for the API docs
    .setDescription('Humble Superheroes service') // Set the description
    .setVersion('1.0') // Set the version of the API
    .build();

  // Generate the Swagger documentation
  const document = SwaggerModule.createDocument(app, docConfig, {});

  // Serve the Swagger documentation at the root URL ('/')
  SwaggerModule.setup('/', app, document);

  // Start the application and listen on the specified port
  await app.listen(port);

  // Log the application running message
  console.log(`🚀 Application is running: http://localhost:${port}`);
}

// Start the application
bootstrap();
