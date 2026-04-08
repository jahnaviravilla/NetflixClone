import { type Movie } from "../../types/movies";

interface Props {
  movie: Movie | null;
  onClose: () => void;

  onPlay: (movie: Movie) => void;
}

function MovieModal({ movie, onClose, onPlay }: Props) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✕
        </button>

        {/* Banner */}
        <img
          src={`http://localhost:8080${movie.bannerUrl}`}
          className="rounded-lg mb-4"
        />

        {/* Content */}
        <h2 className="text-white text-2xl font-bold">{movie.title}</h2>
        <p className="text-gray-300 mt-2">{movie.description}</p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => {
              onClose();
              onPlay(movie);
            }}
            className="bg-white text-black px-4 py-2 rounded"
          >
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">
            + My List
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
