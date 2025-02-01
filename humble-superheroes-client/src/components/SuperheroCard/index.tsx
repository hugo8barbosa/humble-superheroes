import { Superhero } from "../../types";
import "./index.scss";

interface SuperheroCardProps {
  superhero: Superhero; // The superhero object passed to the card
  rank: number; // The superhero's rank
}

/**
 * Superhero card component
 */
const SuperheroCard = ({ superhero, rank }: SuperheroCardProps) => {
  const { name, humility, avatar, superpower } = superhero;

  // Generate a dynamic background color for humility bar (keeps red-orange shades)
  const humilityColor = `rgba(255, ${Math.min(255, 25 * humility)}, 0, 1)`; // Humility color adjusts based on score (red to yellow)
  const humilityWidth = `${humility * 10}%`; // The width of the humility bar (10% per humility point)

  return (
    <div className="superhero-card">
      {/* Header Section */}
      <div className="superhero-card__header">
        <span
          className="superhero-card__name"
          title={`Rank #${rank} - ${name}`}
        >
          #{rank} {name}
        </span>
        <img
          className="superhero-card__avatar"
          src={avatar}
          alt={`${name}'s Avatar`}
        />
      </div>

      {/* Superpower and Humility Score */}
      <div className="superhero-card__details">
        <span title="Superpower">{superpower}</span>
        <span title="Humility Score">{humility}</span>
      </div>

      {/* Humility Bar */}
      <div
        className="superhero-card__humility"
        style={{
          backgroundColor: humilityColor, // Dynamic background color based on humility score
          width: humilityWidth, // Dynamic width based on humility score
        }}
        aria-label={`Humility level: ${humility} out of 10`} // Accessible label for screen readers
      />
    </div>
  );
};

export default SuperheroCard;
