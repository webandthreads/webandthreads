// Particle.js
import React, { useEffect } from "react";
import Particles from "tsparticles";

const Particle = () => {
  useEffect(() => {
    const particlesConfig = {
      // Configuration options for tsparticles
      // You can define your particle animation here
    };

    Particles.load("particles-container", particlesConfig);

    // Optional: You can add event listeners or other logic here
    // for interactions with the particle animation.
  }, []);

  return <div id="particles-container"></div>;
};

export default Particle;
