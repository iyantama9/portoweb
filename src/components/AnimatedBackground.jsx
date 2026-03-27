import { useRef, useEffect } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let columns;
    let drops;

    const initialize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * (canvas.height / 20));
      }
    };

    initialize();
    window.addEventListener("resize", initialize);

    let lastTime = 0;
    const fps = 15;
    const fpsInterval = 1000 / fps;

    const animate = (timestamp) => {
      animationFrameId = window.requestAnimationFrame(animate);
      const elapsed = timestamp - lastTime;

      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);

        ctx.fillStyle = "rgba(13, 17, 23, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#003a00";
        ctx.font = "15px monospace";

        for (let i = 0; i < drops.length; i++) {
          const text = Math.random() > 0.5 ? "0" : "1";
          ctx.fillText(text, i * 20, drops[i] * 20);

          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
    };

    animate(0);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initialize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;
