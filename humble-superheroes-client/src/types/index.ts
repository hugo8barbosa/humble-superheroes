// Define the shape of the Superhero object using TypeScript interface
export interface Superhero {
  // The name of the superhero (e.g., 'Iron Man', 'Spider-Man')
  name: string;

  // The main superpower of the superhero (e.g., 'Web-slinging', 'Genius')
  superpower: string;

  // Humility score for the superhero (a number between 1 and 10)
  humility: number;

  // URL or file path for the superhero's avatar image
  avatar: string;
}
