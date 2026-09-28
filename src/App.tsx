import { useQuery } from '@apollo/client/react';
import { useState } from 'react';

import PageContainer from 'components/PageContainer/PageContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import BirdGrid from 'features/birds/components/BirdGrid/BirdGrid';
import BirdSearch from 'features/birds/components/BirdSearch/BirdSearch';
import { GET_BIRDS } from 'features/birds/queries';
import type { Bird } from 'features/birds/types';

type GetBirdsData = {
  birds: Bird[];
};

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, loading, error } = useQuery(GET_BIRDS);
  const birds = data?.birds ?? [];
  const filteredBirds = birds.filter((bird) => {
    const normalizedSearchValue = searchValue.toLowerCase();
    return (
      bird.commonName.toLowerCase().includes(normalizedSearchValue) ||
      bird.scientificName.toLowerCase().includes(normalizedSearchValue)
    );
  });

  if (loading) {
    return <p>Loading birds...</p>;
  }

  if (error) {
    return <p>Unable to load birds.</p>;
  }

  return (
    <main>
      <PageContainer>
        <PageTitle>Bird Explorer 🐦</PageTitle>
        <p>Discover amazing birds.</p>
        <BirdSearch value={searchValue} onChange={setSearchValue} />
        <BirdGrid birds={filteredBirds} />
      </PageContainer>
    </main>
  );
};

export default App;
