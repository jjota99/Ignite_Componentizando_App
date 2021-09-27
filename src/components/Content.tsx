import { MovieCard } from "../components/MovieCard"

import "../styles/content.scss"


interface MovieProps {
  movie: {
    imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
  }
}


export function Content(props: MovieProps) {
  return (
    <MovieCard key={props.movie.imdbID} title={props.movie.Title} poster={props.movie.Poster} runtime={props.movie.Runtime} rating={props.movie.Ratings[0].Value} />
    )
}