import { useEffect, Dispatch } from "react";

import { api } from "../services/api";
import { Button } from "./Button";

import "../styles/sidebar.scss";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  setGenres: Dispatch<GenreResponseProps[]>;
  genres: GenreResponseProps[];
  setSelectedGenreId: Dispatch<number>;
  selectedGenreId: number;
}

export function SideBar({
  setGenres,
  genres,
  setSelectedGenreId,
  selectedGenreId,
}: SideBarProps) {
  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
      if (response.data && response.data.length > 0) {
        setSelectedGenreId(response.data[0].id);
      }
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  console.log(selectedGenreId);
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
