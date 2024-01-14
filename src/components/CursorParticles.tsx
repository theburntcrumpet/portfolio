import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const CursorParticles: React.FC = () => {
  const createParticle = (x: number, y: number) => {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.textContent = Math.random() > 0.5 ? "0" : "1";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const animationDuration = Math.random() * 3 + 2; // 2 to 5 seconds
    particle.style.animation = `fall ${animationDuration}s linear`;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), animationDuration * 1000);
  };

  useEffect(() => {
    // Particles following the cursor
    const handleMouseMove = (event: MouseEvent) => {
      createParticle(event.clientX, event.clientY);
    };

    // Background particles spawning at random positions
    const spawnBackgroundParticles = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createParticle(x, y);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const intervalId = setInterval(spawnBackgroundParticles, 5); // Adjust interval as needed

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return <Box id="particle-container" />;
};

export default CursorParticles;
