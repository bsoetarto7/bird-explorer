import styles from './BirdCardSkeleton.module.css';

const BirdCardSkeleton = () => {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.image} />

      <div className={styles.birdInfo}>
        <div className={styles.commonName} />
        <div className={styles.scientificName} />
      </div>
    </div>
  );
};

export default BirdCardSkeleton;
