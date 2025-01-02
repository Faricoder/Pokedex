import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button
            key={pokemon.name}
            type="button"
            onClick={() => setPokemonIndex(index)}
          >
            {pokemon.name}
          </button>
        ))}
      </nav>
      
      interface Pokemon {
        name: string;
        imgSrc?: string;
        }

        interface NavBarProps {
        setPokemonIndex: (index: number) => void;
        pokemonList: Pokemon[];
        } 
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
export default NavBar;
