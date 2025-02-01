import "./App.scss";
import { useGetAllSuperheroesQuery } from "./services/api";
import SuperheroCard from "./components/SuperheroCard";
import AddSuperhero from "./components/AddSuperhero";
import EmptyList from "./components/EmptyList";

/**
 * Main app component
 */
function App() {
  // Fetching all superheroes using the custom API hook.
  // It returns the data array or an empty array as default if no data is available
  const { data = [] } = useGetAllSuperheroesQuery();

  return (
    <>
      {/* AddSuperhero component to allow the user to create a new superhero */}
      <AddSuperhero />

      {/* Titles */}
      <div className="title">
        <h1>Our Superheroes</h1>
        <div>
          <div className="divider" />
          <h3>Humility Ranking</h3>
          <div className="divider" />
        </div>
      </div>

      {/* Main container for superhero list */}
      <div className="container">
        {/* Show EmptyList component if there are no superheroes in the data */}
        {data.length === 0 ? <EmptyList /> : null}

        {/* Mapping through all superheroes and displaying each with the SuperheroCard component */}
        {data.map((superhero, i) => (
          <SuperheroCard key={i} rank={i + 1} superhero={superhero} />
        ))}
      </div>
    </>
  );
}

export default App;
