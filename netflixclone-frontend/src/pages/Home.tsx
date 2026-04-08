import { useEffect, useState } from "react";

import Banner from "../components/Banner/Banner";
import { type Movie } from "../types/movies";
import MovieRow from "../components/MovieRow/MovieRow";
import { getMovies } from "../services/api";
import MovieModal from "../components/MovieModal/MovieModal";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
const [watchlist, setWatchlist] = useState<Movie[]>(() => {
  const saved = localStorage.getItem("watchlist");
  return saved ? JSON.parse(saved) : [];
});
const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  // ✅ Fetch movies
  useEffect(() => {
    getMovies().then((res) => setMovies(res.data));
  }, []);

  // ✅ Load watchlist from localStorage
useEffect(() => {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}, [watchlist]);

  // ✅ Save watchlist to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // ✅ Toggle watchlist
  const toggleWatchlist = (movie: Movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);

    if (exists) {
      setWatchlist((prev) => prev.filter((m) => m.id !== movie.id));
    } else {
      setWatchlist((prev) => [...prev, movie]);
    }
  };

  // ✅ Extract genres safely
  const genres = ["All", ...new Set(movies.map((m) => m.genre))];

  // ✅ Filter logic
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  // ✅ Loading state
  if (!movies.length) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen">

      {/* 🔍 Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white outline-none"
        />
      </div>

      {/* 🎭 Genre Filter */}
      <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`px-3 py-1 rounded ${
              selectedGenre === g
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* 🎬 Banner (SAFE) */}
      {movies.length > 0 && <Banner movie={movies[0]} />}

      {/* 🎥 Watchlist Row */}
      {watchlist.length > 0 && (
        <MovieRow
          title="My List"
          movies={watchlist}
          onMovieClick={setSelectedMovie}
          watchlist={watchlist}
          onWatchlist={toggleWatchlist}
        />
      )}

      {/* 🎬 Main Rows */}
      <MovieRow
        title="Trending"
        movies={filteredMovies}
        onMovieClick={setSelectedMovie}
        watchlist={watchlist}
        onWatchlist={toggleWatchlist}
      />

      <MovieRow
        title="Top Picks"
        movies={filteredMovies}
        onMovieClick={setSelectedMovie}
        watchlist={watchlist}
        onWatchlist={toggleWatchlist}
      />

      <MovieRow
        title="Action Movies"
        movies={filteredMovies}
        onMovieClick={setSelectedMovie}
        watchlist={watchlist}
        onWatchlist={toggleWatchlist}
      />

      {/* 🎬 Modal */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
          onPlay={(movie) => setPlayingMovie(movie)}
      />

      <VideoPlayer
  movie={playingMovie}
  onClose={() => setPlayingMovie(null)}
/>
    </div>
  );
}

export default Home;