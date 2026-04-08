import {type Movie } from "../../types/movies";

interface Props {
  movie: Movie;
}

function Banner({ movie }: Props) {
  if (!movie) return null; // 🔥 important

  return (
    <div
      className="h-[70vh] bg-cover bg-center text-white flex flex-col justify-center p-8"
      style={{
        backgroundImage: `url(http://localhost:8080${movie.bannerUrl})`,
      }}
    >
      <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
      <p className="max-w-xl mb-4">{movie.description}</p>

      <div>
        <button className="bg-white text-black px-6 py-2 mr-2 rounded">
          ▶ Play
        </button>
        <button className="bg-gray-700 px-6 py-2 rounded">
          More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;