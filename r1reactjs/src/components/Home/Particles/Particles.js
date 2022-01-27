import React from 'react';
import Particles from "react-tsparticles";

const ReactParticles = () => {
  return (
    <Particles
        id="tsparticles"
        options={{
        fpsLimit: 60,
        particles: {
            color: {
             value: "#ffffff",
            },
            links: {
            color: "#ffffff",
            enable: true,
            opacity: 0.3,
            width: 1,
            },
            move: {
            enable: true,
            speed: 0.3,
            },
            number: {
             value: 30,
            },
            opacity: {
             value: 0.3,
            },
            size: {
              value: 1,
            },
        },
        detectRetina: true,
        }}
    />
  );
};

export default ReactParticles;
