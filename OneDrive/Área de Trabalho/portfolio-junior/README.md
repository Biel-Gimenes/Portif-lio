# Portfólio Profissional - Desenvolvedor Júnior

Projeto de portfólio feito com **HTML, CSS e JavaScript puro**, com foco em apresentação profissional para recrutadores.

## Estrutura de pastas

```txt
portfolio-junior/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html`: estrutura das seções (Home, Sobre, Projetos e Contato).
- `style.css`: tema dark em tons de roxo/preto, layout responsivo e animações.
- `script.js`: renderização dinâmica dos projetos, animação no scroll e menu mobile.
- `README.md`: documentação e guia de personalização.

## Como rodar o projeto

1. Abra a pasta `portfolio-junior` no editor.
2. Clique duas vezes no arquivo `index.html` para abrir no navegador.
3. Se quiser, use a extensão Live Server no VS Code/Cursor para recarregamento automático.

## Como adicionar novos projetos no JavaScript

No arquivo `script.js`, localize o array `projects`:

```javascript
const projects = [
  {
    name: "Nome do projeto",
    description: "Descrição do projeto",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/seu-usuario/seu-projeto",
    demo: "https://seu-usuario.github.io/seu-projeto/",
  },
];
```

Para adicionar um novo projeto:

1. Copie um objeto existente dentro do array.
2. Troque os valores de `name`, `description`, `technologies`, `github` e `demo`.
3. Se não tiver demo, deixe `demo: ""`.
4. Salve o arquivo e atualize o navegador.

## Como personalizar cores e conteúdo

### Alterar cores

No `style.css`, ajuste as variáveis dentro de `:root`:

```css
:root {
  --bg-main: #0b0714;
  --purple-main: #8b5cf6;
  --text-main: #f5f3ff;
}
```

### Alterar textos principais

No `index.html`, edite:

- Nome (`Seu Nome`)
- Título (`Desenvolvedor Júnior`)
- Apresentação da Home
- Descrição da seção Sobre
- Links de GitHub/LinkedIn
- Email

## Boas práticas utilizadas no código

- Estrutura separada por responsabilidade (`HTML`, `CSS`, `JS`).
- Classes e nomes de variáveis descritivos.
- Código JavaScript modularizado em funções pequenas.
- Uso de `DOMContentLoaded` para garantir carregamento correto.
- Navegação com scroll suave para melhor experiência.
- Efeitos visuais leves para não comprometer performance.
- Layout responsivo com foco em mobile e desktop.
- Uso de links externos com `target="_blank"` e `rel="noopener noreferrer"` para segurança.

## Próximos passos recomendados

- Substituir os dados de exemplo pelos seus projetos reais.
- Adicionar imagem de perfil ou foto profissional.
- Incluir seção de experiência/certificações (opcional).
- Publicar no GitHub Pages para compartilhar com recrutadores.
