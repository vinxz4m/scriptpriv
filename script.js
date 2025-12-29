function goCheckout() {
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
}

// escassez progressiva
let spots = 19;
setInterval(() => {
  if (spots > 6) {
    spots--;
    document.getElementById("spots").innerText = spots;
  }
}, 14000);


/* ================= SCROLL CINEMATOGRÁFICO ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach((sec, i) => {
  sec.setAttribute("data-animate", "");
  sec.setAttribute("data-delay", i % 3);
  observer.observe(sec);
});

/* ================= PARTÍCULAS ================= */
const particleContainer = document.createElement("div");
particleContainer.id = "particles";
document.body.appendChild(particleContainer);

const TOTAL_PARTICLES = 35;

for (let i = 0; i < TOTAL_PARTICLES; i++) {
  const p = document.createElement("div");
  p.className = "particle";

  const size = Math.random() * 2 + 1;
  p.style.width = size + "px";
  p.style.height = size + "px";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 15 + Math.random() * 20 + "s";
  p.style.animationDelay = Math.random() * 20 + "s";

  particleContainer.appendChild(p);
}

document.addEventListener("DOMContentLoaded", () => {

  /* ===== SCROLL CINEMATOGRÁFICO ===== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("section").forEach((sec, i) => {
    sec.setAttribute("data-animate", "");
    sec.setAttribute("data-delay", i % 3);
    observer.observe(sec);
  });

  /* ===== PARTÍCULAS ===== */
  const particleContainer = document.createElement("div");
  particleContainer.id = "particles";
  document.body.appendChild(particleContainer);

  const TOTAL_PARTICLES = 35;

  for (let i = 0; i < TOTAL_PARTICLES; i++) {
    const p = document.createElement("div");
    p.className = "particle";

    const size = Math.random() * 2 + 1;
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 15 + Math.random() * 20 + "s";
    p.style.animationDelay = Math.random() * 20 + "s";

    particleContainer.appendChild(p);
  }

});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});
