import PageContainer from 'components/PageContainer/PageContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import BirdGrid from 'features/birds/components/BirdGrid/BirdGrid';
import BirdSearch from 'features/birds/components/BirdSearch/BirdSearch';
import { birds } from 'features/birds/data';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredBirds = birds.filter((bird) => {
    const normalizedSearchValue = searchValue.toLowerCase();
    return (
      bird.commonName.toLowerCase().includes(normalizedSearchValue) ||
      bird.scientificName.toLowerCase().includes(normalizedSearchValue)
    );
  });
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
