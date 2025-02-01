# Humble Superheroes App

This is a web application built with React, TypeScript, Redux, and Vite. It allows you to manage superheroes, displaying them with their name, superpower, humility level, and avatar. You can create new superheroes and see their ranking based on humility.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Development](#development)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- **Superhero Management**: You can create and view superheroes with specific attributes like name, superpower, humility, and avatar.
- **Humility Ranking**: Superheroes are ranked based on their humility score.
- **Responsive Design**: The application adapts to different screen sizes.
- **Superhero Avatar Generation**: A random avatar can be generated for each superhero.
- **API Integration**: The app is connected to a backend API for reading and creating superheros.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds optional static typing.
- **React Query**: If API calls are managed by React Query.
- **Redux Toolkit**: A library for efficient Redux state management.
- **Vite**: A fast build tool and development server.
- **Sass**: A CSS preprocessor for styling.
- **ESLint**: For JavaScript/TypeScript linting.
- **Prettier**: Code formatter.

## Installation

### Prerequisites

Before you can run the project, ensure you have the following tools installed:

- Node.js (LTS version recommended)
- pnpm (or yarn/npm)

### Steps to install

1. Clone the repository:

   ```bash
   git clone https://github.com/hugo8barbosa/humble-superheroes.git
   ```

2. Change directory to the project folder:

   ```bash
   cd humble-superheroes-app
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Create an `.env` file at the root of the project with the following content:

   ```bash
   VITE_APP_SERVER_URL=http://localhost:3333
   ```

   Replace the URL with your actual API URL if different.

## Development

To start the development server, run:

```bash
pnpm run dev
```

This will start the Vite development server. By default, the app will be available at `http://localhost:5173`.

## Usage

- **Homepage**: When you open the application, you will be presented with the superhero list ranked by humility.
- **Add a Superhero**: Click the "Create a new hero" button to expand the form and enter the superhero details.
  - **Name**: Enter the superhero's name.
  - **Superpower**: Enter the superhero's superpower.
  - **Humility**: Use the slider to adjust the humility level.
  - **Avatar**: A random avatar will be generated each time, but you can regenerate it by clicking the "Generate avatar" button.

## API Integration

The app communicates with a backend API for managing superhero data. The following API endpoints are used:

- **GET /superheroes**: Fetches all superheroes in the database.
- **POST /superheroes**: Creates a new superhero with the provided details.

The API is designed to handle superhero objects with the following structure:

```json
{
  "name": "Iron Man",
  "superpower": "Genius",
  "humility": 7,
  "avatar": "https://example.com/avatar.jpg"
}
```

### Example API response for GET /superheroes:

```json
[
  {
    "name": "Iron Man",
    "superpower": "Genius",
    "humility": 9,
    "avatar": "https://avatar.com/ironman.jpg"
  },
  {
    "name": "Spider-Man",
    "superpower": "Web-slinging",
    "humility": 3,
    "avatar": "https://avatar.com/spiderman.jpg"
  }
]
```

## License

This project is licensed under the MIT License.

---

Made with ❤️ by Hugo Barbosa.
