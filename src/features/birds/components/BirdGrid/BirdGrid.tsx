import classNames from 'classnames';
import BirdCard from 'features/birds/components/BirdCard/BirdCard';
import type { Bird } from 'features/birds/types';

import styles from './BirdGrid.module.css';

type BirdGridProps = {
  birds: Bird[];
};

const BirdGrid = ({ birds }: BirdGridProps) => {
  const isEmpty = birds.length === 0;

  return (
    <div className={styles.grid}>
      {birds.map((bird) => (
        <BirdCard key={bird.id} bird={bird} />
      ))}
    </div>
  );
};

export default BirdGrid;
