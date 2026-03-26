particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#841de4" }, // Your purple button color
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#27d14f", // Your green hover color
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" }, // Lines follow your mouse
      "onclick": { "enable": true, "mode": "push" }, // Adds more particles on click
      "resize": true
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
