import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Characters } from "./components/Characters";
import { Pagination } from "./components/Pagination";

function App() {
  const initialurl = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <div>
      <Navbar brand="Rick and Morty App" />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="container mt-5">
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default App;
