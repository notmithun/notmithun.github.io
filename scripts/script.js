console.log("Build 2.0.6");
function calculateAge() {
  const birthDate = new Date(2012, 7, 18);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (today < new Date(today.getFullYear(), 7, 18)) {
    age--;
  }
  return age;
}

document.getElementById("age").textContent = calculateAge();

let mode = localStorage.getItem("theme") || "dark";
const body = document.body;
const themeSel = document.getElementById("themesel");
const ddimg = document.getElementById("ddimg");
const discordClick = document.getElementById("discord_click");


const SVG_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/></svg>`;
const SVG_SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707"/></svg>`;

function applyTheme() {
  const isLight = mode === "light";
  body.className = isLight ? "light" : "dark";
  themeSel.innerHTML = isLight ? SVG_SUN : SVG_MOON;
}

function changeTheme() {
  mode = mode === "dark" ? "light" : "dark";
  localStorage.setItem("theme", mode);
  applyTheme();
}

function discordClickFunc() {
  try {
    navigator.clipboard.writeText("notmithun_");
    alert("Copied Discord username: notmithun_");
  } catch (err) {
    alert("Failed to copy Discord username so my username is notmithun_");
  }
}

applyTheme();
themeSel.addEventListener("click", changeTheme);
discordClick.addEventListener("click", discordClickFunc)

tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#22c55e" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    links: {
      enable: true,
      distance: 150,
      color: "#22c55e",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: { repulse: { distance: 100, duration: 0.4 } },
  },
});
