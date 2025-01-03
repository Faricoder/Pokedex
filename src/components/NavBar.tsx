import PokemonCard from "./PokemonCard";
import React from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  currentIndex: number;
}

function NavBar({ setPokemonIndex, pokemonList, currentIndex }: NavBarProps) {
  const handlePrevious = () => {
    const newIndex =
      (currentIndex - 1 + pokemonList.length) % pokemonList.length;
    setPokemonIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % pokemonList.length;

    if (pokemonList[newIndex].name.toLowerCase() === "pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(newIndex);
  };

  return (
    <div>
      <nav>
        <button onClick={handlePrevious}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </nav>
    </div>
  );
}

export default NavBar;
