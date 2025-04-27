import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = inputValue.trim();
    if (trimmedQuery === "") {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(trimmedQuery);
    setInputValue("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          className={styles["search-field-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <button className={styles["button-fot-search-field"]} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
