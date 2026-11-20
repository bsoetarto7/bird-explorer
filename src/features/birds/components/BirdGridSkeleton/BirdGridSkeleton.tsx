import BirdCardSkeleton from 'features/birds/components/BirdCardSkeleton/BirdCardSkeleton';

import styles from 'features/birds/components/BirdGrid/BirdGrid.module.css';

const SKELETON_COUNT = 10;

const BirdGridSkeleton = () => {
  return (
    <div className={styles.grid} aria-hidden="true">
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <BirdCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default BirdGridSkeleton;
