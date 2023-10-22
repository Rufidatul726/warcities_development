"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// import SearchManufacturer from "./SearchManufacturer";
import SearchTournament from "./SearchTournament";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  // const [manufacturer, setManuFacturer] = useState("");
  const [tournament, setTournament] = useState("");
  // const [model, setModel] = useState("");
  const [game, setGame] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (manufacturer.trim() === "" && model.trim() === "") {
    //   return alert("Please provide some input");
    // }

    if(tournament.trim() === "" && game.trim() === "") {
      return alert("Please provide some input");
    }

    // updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    updateSearchParams(tournament.toLowerCase(), game.toLowerCase());
  };

  // const updateSearchParams = (model: string, manufacturer: string) => {
  const updateSearchParams = (tournament: string, game: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    // if (model) {
    //   searchParams.set("model", model);
    // } else {
    //   searchParams.delete("model");
    // }
    if(game) {
      searchParams.set("game", game);
    } else {
      searchParams.delete("game");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    // if (manufacturer) {
    //   searchParams.set("manufacturer", manufacturer);
    // } else {
    //    searchParams.delete("manufacturer");
    // }
    if(tournament) {
      searchParams.set("tournament", tournament);
    } else {
      searchParams.delete("tournament");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        {/* <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        /> */}
        <SearchTournament
          tournament={tournament}
          setTournament={setTournament}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/game-icon.png'
          // src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          // alt='car model'
          alt="game"
        />
        {/* <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        /> */}
        <input
          type='text'
          name='game'
          value={game}
          onChange={(e) => setGame(e.target.value)}
          placeholder='Arena of Valor...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
