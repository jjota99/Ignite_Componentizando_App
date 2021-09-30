import { useState } from "react";
import { GenreResponseProps, SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(0);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  return (
    <>
      <SideBar
        setGenres={setGenres}
        genres={genres}
        setSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} genres={genres} />
    </>
  );
}
