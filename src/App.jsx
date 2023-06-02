import './App.css'
import PokemonCard from './PokemonCard';
import { Pokemon } from './pokemonData';

const App = () => {
  return (
    <div>
      <h1 className="card-title">Pokémon Cards</h1>
      <div className="card-container">
        {Object.keys(Pokemon).map((type) => (
          <div key={type} className="card-group">
            <h2>{type}</h2>
            {Pokemon[type].map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
