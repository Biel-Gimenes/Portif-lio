const projects = [
  {
    name: "LP com JavaScript",
    description:
      "Projeto de lógica de programação com JavaScript em página web; publicado na Vercel.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Biel-Gimenes/LP-COM-JS",
    demo: "https://lp-com-js.vercel.app",
  },
  {
    name: "Jornada Viagens",
    description:
      "Site de jornada de viagens desenvolvido no curso de front-end da Alura.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Biel-Gimenes/jornada_viagens",
    demo: "https://jornada-viagens-xi-self.vercel.app",
    construction: true,
  },
  {
    name: "Sorteador de números",
    description:
      "Aplicação web para sortear números dentro de um intervalo definido.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Biel-Gimenes/Sorteador-de-numeros",
    demo: "https://vdeploy-sorteador.vercel.app",
  },
  {
    name: "Desafio Python — Banco",
    description:
      "Desafio de programação orientada a objetos simulando operações bancárias em Python.",
    technologies: ["Python"],
    github: "https://github.com/Biel-Gimenes/Desafio-Python-Banco",
    demo: "",
  },
];

const projectsContainer = document.getElementById("projectsContainer");
const year = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("main section[id]");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const demoLink = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Demo</a>`
    : "";

  const constructionBadge = project.construction
    ? `<span class="project-badge" role="status">Em construção</span>`
    : "";

  card.innerHTML = `
    <h3 class="project-card-title">${project.name}${constructionBadge}</h3>
    <p>${project.description}</p>
    <p class="project-tech"><strong>Tecnologias:</strong> ${project.technologies.join(
      ", "
    )}</p>
    <div class="project-links">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      ${demoLink}
    </div>
  `;

  return card;
}

function renderProjects() {
  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
  });
}

function setupMobileMenu() {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupHeaderAndActiveSection() {
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 18);

    let currentSectionId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = section.id;
      }
    });

    navAnchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      const isActive = href === `#${currentSectionId}`;
      anchor.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initializePortfolio() {
  renderProjects();
  setupMobileMenu();
  setupRevealOnScroll();
  setupHeaderAndActiveSection();
  year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", initializePortfolio);
