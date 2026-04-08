import { type Movie } from "../../types/movies";
import MovieCard from "../MovieCard/MovieCard";

interface Props {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
  watchlist: Movie[];
  onWatchlist: (movie: Movie) => void;
}

function MovieRow({
  title,
  movies,
  onMovieClick,
  watchlist,
  onWatchlist,
}: Props) {
  return (
    <div className="mb-6 px-4">
      <h2 className="text-white text-xl mb-2">{title}</h2>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={onMovieClick}
            onWatchlist={onWatchlist}
            isInWatchlist={watchlist.some((m) => m.id === movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
