import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesContainer = () => {
  const particlesInit = async (main) => {
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

  const particlesLoaded = (container) => {};

  const options = {
    background: {
      color: {
        value: '#000',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -20,
    },
    fpsLimit: 120,
    interactivity: {
      detect_on: 'window',
      events: {
        onClick: {
          enable: true,
          mode: 'trail',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        parallax: { enable: false, force: 60, smooth: 10 },
        resize: true,
      },

      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 100,
          duration: 1,
        },
        trail: {
          delay: 0.1,
          quantity: 3,
        },
      },
    },
    particles: {
      color: {
        value: '#fff',
      },
      links: {
        color: '#fff',
        distance: 150,
        enable: true,
        opacity: 0.6,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.1,
        },
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: false,
          area: 1000,
        },
        value: 25,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'images',
        images: [{ src: '/logo.png', height: 20, width: 20 }],
      },
      size: {
        value: { min: 3, max: 15 },
      },
    },
    detectRetina: true,
  }

  return <Particles options={options} init={particlesInit} />
}

export default ParticlesContainer
