import React, { useState, useEffect } from "react";
import md5 from "md5";
import SearchBar from "./Searchbar";
import Loader from "./Loader";

const publicKey = "ebd12928812d5b5fa910b828b9510879";
const privateKey = "70264f4837d1d3caa99dd2e22ad99384e3118248";
const generateHash = (timestamp) => {
  const hash = md5(timestamp + privateKey + publicKey);
  return hash;
};

export default function ListItem() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const baseUrl = "https://gateway.marvel.com/v1/public/";
      const endpoint = "characters";
      const timestamp = Date.now();
      const hash = generateHash(timestamp);

      try {
        const response = await fetch(
          `${baseUrl}${endpoint}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCharacters(data.data.results);
        console.log(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Marvel Personajes</h1>
      <SearchBar onChange={setFilter} />
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <h2>{character.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
