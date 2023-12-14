import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { Providers } from './components/Providers';
import { SearchResults } from './components/SearchResults';

const App = () => {
  return (
    <Providers>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pokedex</h1>
      <SearchResults />
    </Providers>
  );
};

export default App;
