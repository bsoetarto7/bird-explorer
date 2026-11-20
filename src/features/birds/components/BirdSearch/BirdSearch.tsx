import styles from './BirdSearch.module.css';

type BirdSearchProps = {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
};

const BirdSearch = ({ disabled, value, onChange }: BirdSearchProps) => {
  return (
    <div className={styles.search}>
      <label className={styles.label} htmlFor="bird-search">
        Search birds
      </label>

      <input
        className={styles.input}
        id="bird-search"
        type="search"
        placeholder="Search by name..."
        value={value}
        disabled={disabled}
        onChange={(event) => !disabled && onChange(event.target.value)}
      />
    </div>
  );
};

export default BirdSearch;
