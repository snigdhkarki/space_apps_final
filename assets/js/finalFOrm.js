/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);

function openForm() {
  document.querySelector(
    "main"
  ).innerHTML = `<div class="form-popup" id="myForm">
  <section id="booking1">
    <div class="heading2">
      <h2>Book Your Space Adventure</h2>
    </div>
    <form action="#" method="post">
      <div class="name">
        <label for="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div class="email">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="dest">
        <label for="destination">Select Destination:</label>
        <select id="destination" name="destination" required>
          <option value="mars">Mars</option>
          <option value="jupiter">Jupiter</option>
          <option value="Moon">Moon</option>
          <option value="Jupiter">Jupiter</option>
          <!-- Add more options for other destinations -->
        </select>
      </div>
      <div class="date">
        <label for="departure-date">Departure Date:</label>
        <input
          type="date"
          id="departure-date"
          name="departure-date"
          required
        />
      </div>
      <div class="req">
        <label for="additional-requests">Additional Requests:</label>
        <textarea
          id="additional-requests"
          name="additional-requests"
          rows="4"
          placeholder="Any Message"
        ></textarea>
      </div>
      <div class="submit">
        <button type="submit" onclick="closeForm()">Submit</button>
        <button type="button" onclick="closeForm()">Close</button>
      </div>
    </form>
  </section>
</div>`;
}

function closeForm() {
  document.querySelector("main").innerHTML = "";
}
