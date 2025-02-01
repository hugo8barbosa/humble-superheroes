# Humble Superheroes API V1

This API is designed to manage a list of superheroes with a focus on their humility scores. It allows users to check the health of the API, view superheroes sorted by humility, and create new superheroes.

## Features

- **Health Check**: Endpoint to check if the API is running smoothly.
- **Superheroes**: Endpoints to get superheroes sorted by their humility scores and to create new superheroes.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Swagger**: Used for API documentation.
- **TypeScript**: For type safety and modern JavaScript features.

## Getting Started

### Prerequisites

Before you can run the project, ensure you have the following tools installed:

- Node.js (LTS version recommended)
- pnpm (or yarn/npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hugo8barbosa/humble-superheroes.git
   ```

2. Navigate into the project folder:

   ```bash
   cd humble-superheroes-api
   ```

3. Install dependencies:
   ```bash
   pnpm i
   ```

### Running the Application

1. To run the application locally:

   ```bash
   pnpm run start
   ```

2. The application will be available at [http://localhost:3333](http://localhost:3333).

3. API Documentation: After running the app, you can access the Swagger UI by navigating to [http://localhost:3333](http://localhost:3333) to view the available endpoints and API documentation.

### Environment Variables

You can configure the server port by setting the `PORT` environment variable:

```bash
PORT=3333 npm run start
```

## API Endpoints

### 1. Health Check

- **Endpoint**: `GET /health`
- **Description**: Returns a message indicating the health status of the API.
- **Response**:
  ```json
  {
    "message": "Welcome to Humble Superheroes API!"
  }
  ```

### 2. Get Superheroes

- **Endpoint**: `GET /api/v1/superheroes`
- **Description**: Returns a list of superheroes sorted by humility in descending order.
- **Response**:
  ```json
  [
    {
      "name": "Iron Man",
      "superpower": "Genius",
      "humility": 9,
      "avatar": "ironman.jpg"
    },
    {
      "name": "Spider-Man",
      "superpower": "Web-slinging",
      "humility": 3,
      "avatar": "spiderman.jpg"
    }
  ]
  ```

### 3. Create Superhero

- **Endpoint**: `POST /api/v1/superheroes`
- **Description**: Creates a new superhero with the provided details.
- **Request Body**:
  ```json
  {
    "name": "Thor",
    "superpower": "Thunder",
    "humility": 7,
    "avatar": "thor.jpg"
  }
  ```
- **Response**:
  ```json
  {
    "name": "Thor",
    "superpower": "Thunder",
    "humility": 7,
    "avatar": "thor.jpg"
  }
  ```

## API Documentation (Swagger)

Once the application is running, you can visit the Swagger UI at the following URL to explore the API documentation:
[Swagger API Documentation](http://localhost:3333)

## Code Structure

### `src/health/health.controller.ts`

The health check controller handles the `/health` endpoint to check the API's health status.

### `src/superhero/superhero.controller.ts`

This controller exposes two endpoints:

- `GET /api/v1/superheroes`: Retrieves superheroes sorted by humility in descending order.
- `POST /api/v1/superheroes`: Creates a new superhero based on the provided data.

### `src/superhero/superhero.service.ts`

The superhero service manages the creation and retrieval of superhero data, including sorting superheroes by their humility scores.

### `src/superhero/superhero.module.ts`

This module organizes the superhero-related components, including the service and controller.

### `src/app.module.ts`

The root module of the application that imports the `SuperheroModule` and `HealthCheckController`.

## Running Tests

To run the tests for this project, use the following command:

```bash
pnpm run test
```

This will run all unit tests using Jest.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by Hugo Barbosa.
