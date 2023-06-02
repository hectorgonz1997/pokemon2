import React from 'react';
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    return (
      <div className="pokemon-card">
        <img src={pokemon.avatar} alt={pokemon.pokemonName} />
        <h3>{pokemon.pokemonName}</h3>
        <div className="powers">
          <h4>Powers:</h4>
          <ul>
            {Object.values(pokemon.power).map((power, index) => (
              <li key={index}>{power}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default PokemonCard;