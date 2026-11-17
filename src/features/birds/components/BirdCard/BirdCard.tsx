import classNames from 'classnames';
import type { Bird } from 'features/birds/types';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
  addFavourite,
  removeFavourite,
} from 'features/birds/store/favouritesSlice';

import styles from './BirdCard.module.css';

type BirdCardProps = {
  bird: Bird;
};

const BirdCard = ({ bird }: BirdCardProps) => {
  const dispatch = useAppDispatch();

  const isFavourite = useAppSelector((state) =>
    state.favourites.birdIds.includes(bird.id),
  );

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(bird.id));
    } else {
      dispatch(addFavourite(bird.id));
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={bird.imageUrl}
          alt={bird.commonName}
        />
        <button
          type="button"
          className={classNames(styles.favouriteButton, {
            [styles.favourited]: isFavourite,
          })}
          onClick={handleToggleFavourite}
          aria-label={
            isFavourite
              ? `Remove ${bird.commonName} from favourites`
              : `Add ${bird.commonName} to favourites`
          }
          aria-pressed={isFavourite}
        >
          <span
            className={classNames(styles.heart, {
              [styles.active]: isFavourite,
            })}
            aria-hidden="true"
          />
        </button>
      </div>
      <div className={styles.birdInfo}>
        <h2 className={styles.commonName}>{bird.commonName}</h2>
        <p className={styles.scientificName}>
          <em>{bird.scientificName}</em>
        </p>
      </div>
    </article>
  );
};

export default BirdCard;
