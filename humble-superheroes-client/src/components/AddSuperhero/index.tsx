import { useCallback, useRef, useState } from "react";
import "./index.scss";
import { useCreateSuperheroMutation } from "../../services/api";

// Function to generate a random avatar URL
const generateAvatar = () =>
  `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`;

/**
 * Add superhero component
 * Toggle bar to show/hide form to create a new superhero
 */
const AddSuperhero = () => {
  // State hooks for form toggling, inputs, and avatar
  const [toggle, setToggle] = useState(false);
  const [humility, setHumility] = useState(7);
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [avatar, setAvatar] = useState<string>(generateAvatar());

  // Ref to access the form directly and reset it
  const formRef = useRef<HTMLFormElement>(null);

  // Hook to interact with the API for creating superheroes
  const [createSuperhero] = useCreateSuperheroMutation();

  // Reset form fields to initial values
  const resetForm = () => {
    formRef.current?.reset();
    setHumility(7);
    setName("");
    setSuperpower("");
    setAvatar(generateAvatar());
  };

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Call the API to create a superhero with the current form data
      await createSuperhero({ name, superpower, humility, avatar }).unwrap();

      // Reset form after a successful submission
      setToggle(false);
      setTimeout(resetForm, 300);
    },
    [avatar, createSuperhero, humility, name, superpower]
  );

  return (
    <div className={`toggle-container ${toggle ? "active" : ""}`}>
      <form
        ref={formRef} // Link the form reference to reset it later
        onSubmit={handleSubmit} // Handle form submission
        className="toggle-form"
        data-testid="toggle-form"
      >
        {/* Avatar section: button to generate a new avatar */}
        <div className="toggle-form__avatar">
          <button
            type="button"
            title="Generate avatar" // Tooltip to inform the user
            onClick={() => setAvatar(generateAvatar())} // On click, generate a new avatar
          />
          <img src={avatar} alt="Superhero Avatar" />
        </div>

        {/* Inputs for superhero name and superpower */}
        <div className="toggle-form__inputs">
          <div className="toggle-form__inputs--group">
            <label className="label" htmlFor="name">
              Superhero name
            </label>
            <input
              type="text"
              className="input"
              id="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
            />
          </div>

          <div className="toggle-form__inputs--group">
            <label className="label" htmlFor="superpower">
              Superhero superpower
            </label>
            <input
              type="text"
              className="input"
              id="superpower"
              required
              autoComplete="off"
              value={superpower}
              onChange={(e) => setSuperpower(e.target.value)} // Update superpower state
            />
          </div>
        </div>

        {/* Humility slider */}
        <div className="toggle-form__humility">
          <label className="label" htmlFor="humility">
            Superhero humility: {humility}
          </label>
          <input
            type="range"
            id="humility"
            min="1"
            max="10"
            value={humility}
            onChange={(e) => setHumility(Number(e.target.value))} // Update humility value
          />
        </div>

        {/* Actions section: submit button */}
        <div className="toggle-form__actions">
          <button type="submit" disabled={!name || !superpower}>
            Save
          </button>
        </div>
      </form>

      {/* Button to toggle the form visibility */}
      <button className="toggle-button" onClick={() => setToggle(!toggle)}>
        <span>Create a new hero</span>
        <img src="double_arrow_down.svg" alt="Expand form" />{" "}
      </button>
    </div>
  );
};

export default AddSuperhero;
