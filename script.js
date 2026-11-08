const projects = [
  {
    name: "Kurio — Marketplace de NFTs",
    description:
      "Marketplace de NFTs com fluxo completo: busca e filtros, detalhe da obra, carrinho com cupom, checkout, pedidos e perfil. API simulada com MSW e dados persistidos no navegador.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "MSW"],
    github: "https://github.com/Biel-Gimenes/kurio-marketplace-Desafio",
    demo: "https://kurio-marketplace-nine.vercel.app",
  },
  {
    name: "Pokédex",
    description:
      "Primeiro projeto para treinar React e Tailwind, consumindo uma API de Pokémon com Axios.",
    technologies: ["React", "Vite", "Tailwind CSS", "Axios"],
    github: "https://github.com/Biel-Gimenes/Pokedex",
    demo: "https://pokedex-psi-rouge-48.vercel.app",
  },
  {
    name: "Formatação Iris",
    description:
      "Ferramenta web que formata tarefas (linha compacta ou tabela do Excel) e copia o resultado como tabela para o Microsoft Teams.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Biel-Gimenes/Formatacao-iris",
    demo: "",
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
