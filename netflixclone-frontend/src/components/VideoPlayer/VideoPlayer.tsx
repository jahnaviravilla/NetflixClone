import {type Movie } from "../../types/movies";

interface Props {
  movie: Movie | null;
  onClose: () => void;
}

function VideoPlayer({ movie, onClose }: Props) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">

      {/* Close */}
      <button
        onClick={onClose}
        className="text-white text-xl p-4 self-end"
      >
        ✕
      </button>

      {/* Video */}
      <video
        controls
        autoPlay
        className="w-full h-full object-contain"
      >
        <source
          src={`http://localhost:8080${movie.videoUrl}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoPlayer;