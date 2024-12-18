import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button
            type="button"
            key={pokemon.name}
            onClick={() => setPokemonIndex(index)}
          >
            {pokemon.name}
          </button>
        ))}
      </nav>
      <h1>Pokemon Index</h1>

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
