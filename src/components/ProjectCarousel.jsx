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

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/90 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={`Gambar sebelumnya untuk ${title}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/90 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={`Gambar berikutnya untuk ${title}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  index === current ? "w-5 bg-cyan-400" : "w-1.5 bg-white/50"
                }`}
                aria-label={`Tampilkan gambar ${index + 1} dari ${images.length}`}
                aria-current={index === current ? "true" : undefined}
              />
            ))}
          </div>

          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs font-mono text-white/80">
            {current + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
