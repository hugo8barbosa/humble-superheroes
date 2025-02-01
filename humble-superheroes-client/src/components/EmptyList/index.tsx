import "./index.scss";

/**
 * Empty list component to be displayed when there's no data
 */
const EmptyList = () => {
  return (
    <div className="empty-list">
      <h1>🦸‍♂️✨</h1>
      <h2>No superheroes ranked yet</h2>
      <h4>Why not create a new hero and save the day?</h4>
    </div>
  );
};

export default EmptyList;
