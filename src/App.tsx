import { useQuery } from '@apollo/client/react';
import { useState } from 'react';

import PageContainer from 'components/PageContainer/PageContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import BirdGrid from 'features/birds/components/BirdGrid/BirdGrid';
import BirdSearch from 'features/birds/components/BirdSearch/BirdSearch';
import BirdGridSkeleton from 'features/birds/components/BirdGridSkeleton/BirdGridSkeleton';
import { GET_BIRDS } from 'features/birds/queries';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, loading, error } = useQuery(GET_BIRDS);

  const birds = data?.birds ?? [];
  const normalizedSearchValue = searchValue.trim().toLowerCase();

  const filteredBirds = birds.filter(
    (bird) =>
      bird.commonName.toLowerCase().includes(normalizedSearchValue) ||
      bird.scientificName.toLowerCase().includes(normalizedSearchValue),
  );

  const renderContent = () => {
    if (loading) {
      return <BirdGridSkeleton />;
    }

    if (error) {
      return <p role="alert">Unable to load birds. Please try again later.</p>;
    }

    if (birds.length === 0) {
      return <p>No birds available right now.</p>;
    }

    if (filteredBirds.length === 0) {
      return <p role="status">No birds found. Try a different search.</p>;
    }

    return <BirdGrid birds={filteredBirds} />;
  };

  return (
    <main>
      <PageContainer>
        <PageTitle>Bird Explorer 🐦</PageTitle>
        <p>Discover amazing birds.</p>

        <BirdSearch
          value={searchValue}
          onChange={setSearchValue}
          disabled={loading || Boolean(error) || birds.length === 0}
        />

        {renderContent()}
      </PageContainer>
    </main>
  );
};

export default App;
