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
    name: "Formatador de Tarefas",
    description:
      "Ferramenta web que resolve uma dor do meu dia a dia no trabalho: transforma as tarefas do dia, escritas em linha compacta ou coladas de uma planilha do Excel, em uma tabela organizada e pronta para colar no Microsoft Teams.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Biel-Gimenes/Formatacao-iris",
    demo: "",
  },
  {
    name: "Desafio Python — Banco",
    description:
      "Sistema bancário em Python que roda no terminal, feito como desafio de lógica de programação. Permite depositar, sacar (limite de R$ 500 por saque e 3 saques) e consultar o extrato. Na versão final, o código foi organizado em funções e ganhou cadastro de usuários por CPF (sem duplicados), criação de contas correntes vinculadas ao usuário (agência 0001) e listagem de contas.",
    technologies: ["Python", "Funções", "Listas e dicionários"],
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

    // A seção ativa é a última cujo topo já passou da navbar.
    let currentSectionId = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        currentSectionId = section.id;
      }
    });

    // Contato é a última seção e é curta: no fim da página o scroll
    // não chega ao topo dela, então forçamos como ativa.
    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;
    if (reachedBottom && sections.length) {
      currentSectionId = sections[sections.length - 1].id;
    }

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
