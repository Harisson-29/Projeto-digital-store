# 👟 Digital Store — Projeto Front-end (Geração Tech)

Aplicação web responsiva de e-commerce desenvolvida como projeto de conclusão do módulo de **Front-end** do programa **Geração Tech**. O sistema foi construído com foco em arquitetura modular de componentes, tipagem estática e experiência mobile-first, seguindo fielmente as especificações do design system no Figma.

🔗 **Acesse o projeto online:** [Em breve — link do deploy]

---

## 🎯 Sobre o Projeto

A **Digital Store** simula a jornada completa de navegação de uma loja virtual de artigos esportivos e streetwear, contemplando vitrine promocional, filtragem de catálogo, visualização detalhada de produtos, fluxo de autenticação e acompanhamento de pedidos.

---

## 🚀 Funcionalidades e Páginas

- **Página Inicial (`/`):** Carrossel interativo de ofertas principais (`Gallery`), cards promocionais de coleções (`CollectionCard`), navegação visual por categorias (`CategoryIcons`), vitrine de produtos em alta (`ProductListing`) e banner de oferta especial (`SpecialOffer`).
- **Catálogo de Produtos (`/produtos`):** Grade completa de produtos com barra lateral de filtros por marca, categoria, gênero e estado (`FilterGroup`), além de menu gaveta (drawer) responsivo para dispositivos móveis.
- **Detalhes do Produto (`/produto`):** Galeria de visualização com miniaturas, avaliação, preços promocionais, seletores de tamanho e cor (`BuyBox`, `ProductDetails`, `ProductOptions`) e seção de produtos relacionados.
- **Autenticação (`/login` e `/cadastro`):** Formulários estruturados para acesso à conta e cadastro de novos clientes.
- **Meus Pedidos (`/meus-pedidos`):** Acompanhamento de pedidos realizados e status de entrega.
- **Tratamento de Rotas (`404`):** Página dedicada para rotas inexistentes ou seções em construção.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** — Biblioteca para construção de interfaces baseadas em componentes.
- **[TypeScript](https://www.typescriptlang.org/)** — Superset JavaScript com tipagem estática para maior segurança no código.
- **[Vite](https://vitejs.dev/)** — Bundler e servidor de desenvolvimento de alta performance.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitário para estilização responsiva.
- **[React Router DOM](https://reactrouter.com/)** — Gerenciamento de rotas SPA (Single Page Application).

---

## 📁 Arquitetura do Projeto

```text
digital-store/
├── public/                     # Arquivos estáticos públicos
├── src/
│   ├── assets/                 # Logos e recursos gráficos SVG
│   │   ├── logo-footer.svg
│   │   └── logo-header.svg
│   ├── components/             # Componentes reutilizáveis da interface
│   │   ├── CategoryIcons/      # Ícones circulares de categorias
│   │   ├── CollectionCard/     # Cards promocionais de coleções
│   │   ├── FilterGroup/        # Grupos de filtros (checkbox e radio)
│   │   ├── Footer/             # Rodapé institucional e redes sociais
│   │   ├── Gallery/            # Carrossel principal da Home
│   │   ├── Header/             # Cabeçalho com busca, carrinho e menu mobile
│   │   ├── Information/        # Colunas de links informativos do rodapé
│   │   ├── Logo/               # Componente da marca Digital Store
│   │   ├── ProductCard/        # Card individual de produto
│   │   ├── ProductDetails/     # Especificações detalhadas do item
│   │   ├── ProductListing/     # Grade responsiva de produtos
│   │   ├── Section/            # Container padrão de seções com título e link
│   │   └── SpecialOffer/       # Seção de oferta especial em destaque
│   ├── Pages/                  # Páginas e rotas da aplicação
│   │   ├── CadastroPage/       # Tela de criação de conta
│   │   ├── HomePage/           # Página inicial
│   │   ├── LoginPage/          # Tela de autenticação
│   │   ├── MyOrdersPage/       # Listagem de pedidos do usuário
│   │   ├── NotFoundPage/       # Página de erro 404
│   │   ├── ProductListingPage/ # Catálogo completo com filtros
│   │   └── Layout.tsx          # Estrutura base (Header + Conteúdo + Footer)
│   ├── App.css                 # Estilos globais auxiliares
│   ├── App.tsx                 # Configuração central das rotas
│   ├── index.css               # Diretivas do Tailwind CSS
│   └── main.tsx                # Ponto de entrada da aplicação
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Harisson-29/Projeto-digital-store.git
   ```
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd digital-store
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).