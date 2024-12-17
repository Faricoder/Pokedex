import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";

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

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
    if (pokemonIndex < pokemonList.length - 1) return pokemonIndex;
  };

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
    if (pokemonIndex > 0) return pokemonIndex;
  };

  return (
    <div>
      <h1>Pokemon Index</h1>
      <button type="button" onClick={handleClick}>
        Suivant
      </button>
      <button type="button" onClick={handlePrevious}>
        Précédent
      </button>

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
