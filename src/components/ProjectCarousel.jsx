import { useState, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react";

const ProjectCarousel = ({ images, title = "Project", interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [images.length, isPaused, next, interval]);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} images`}
      className="relative w-full h-56 overflow-hidden bg-[#0D1117] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            className="w-full h-full flex-shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 2 && (
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 p-0 rounded-full bg-black/75 text-white inline-flex items-center justify-center transition-colors duration-200 hover:bg-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={`Gambar berikutnya untuk ${title}`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ProjectCarousel;
