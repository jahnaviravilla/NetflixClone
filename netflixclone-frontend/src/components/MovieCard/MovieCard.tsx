import { type Movie } from "../../types/movies";

interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
  onWatchlist: (movie: Movie) => void;
  isInWatchlist: boolean;
}

function MovieCard({ movie, onClick, onWatchlist, isInWatchlist }: Props) {
  return (
    <div
      onClick={() => onClick(movie)}
      className="relative group min-w-40 cursor-pointer"
    >
      {/* Image */}
      <img
        src={movie.imageUrl || "https://via.placeholder.com/150"}
        alt={movie.title}
        className="rounded-lg transition duration-300 group-hover:scale-103"
        // className="rounded-lg transition duration-300 group-hover:scale-110 group-hover:shadow-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-2 rounded-lg">
        <h3 className="text-white text-sm">{movie.title}</h3>

        <button className="mt-2 bg-white text-black text-xs px-2 py-1 rounded">
          ▶ Play
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent modal opening
            onWatchlist(movie);
          }}
          className="mt-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
        >
          {isInWatchlist ? "✓ Added" : "+ My List"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
