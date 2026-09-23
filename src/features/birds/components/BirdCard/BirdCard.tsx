import type { Bird } from 'features/birds/types';

import styles from './BirdCard.module.css';

type BirdCardProps = {
  bird: Bird;
};

const BirdCard = ({ bird }: BirdCardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={bird.imageUrl} alt={bird.commonName} />

      <div className={styles.content}>
        <h2 className={styles.name}>{bird.commonName}</h2>
        <p className={styles.scientificName}>
          <em>{bird.scientificName}</em>
        </p>
      </div>
    </article>
  );
};

export default BirdCard;
