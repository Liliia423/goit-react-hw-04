import styles from "./SearchBar.module.css";

export default function SwearchBar() {
  return (
    <header>
      <form>
        <input
          className={styles["search-field-input"]}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button className={styles["button-fot-search-field"]} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
