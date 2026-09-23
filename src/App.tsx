import PageTitle from 'components/PageTitle/PageTitle';
import BirdGrid from 'features/birds/components/BirdGrid/BirdGrid';
import { birds } from 'features/birds/data';

const App = () => {
  return (
    <main>
      <PageTitle>Bird Explorer 🐦</PageTitle>
      <p>Discover amazing birds.</p>

      <BirdGrid birds={birds} />
    </main>
  );
};

export default App;
