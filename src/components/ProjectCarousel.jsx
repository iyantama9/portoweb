import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCarousel = ({ images, title = "Project", interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [images.length, isPaused, next, interval]);

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

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80 focus:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80 focus:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
