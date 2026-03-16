# CRUD de Produtos - React + Cypress

Aplicação web desenvolvida em **React** que implementa um CRUD de produtos (Create, Read, Update, Delete), com navegação entre páginas e testes End-to-End utilizando **Cypress**.

## Tecnologias utilizadas

- React
- Vite
- Cypress
- JavaScript
- CSS

## Funcionalidades

### 📦 CRUD de Produtos

A aplicação permite:

- Listar produtos
- Criar novos produtos
- Editar produtos existentes
- Excluir produtos

Cada produto possui os seguintes campos:

- Nome
- Preço
- Categoria

Os dados são mantidos em memória utilizando **estado do React**, não sendo necessário backend.

---

### 🧭 Navegação

A aplicação possui um menu de navegação com duas páginas principais:

- **Produtos** – tela principal contendo a listagem e gerenciamento de produtos
- **Sobre** – página informativa sobre a aplicação

---

### 🧪 Testes End-to-End

Foram implementados testes utilizando **Cypress** cobrindo os principais fluxos da aplicação:

- Criação de produto
- Edição de produto
- Exclusão de produto
- Navegação entre páginas

Os testes utilizam **data-testid** como seletores principais para garantir estabilidade.

---

## Estrutura do projeto

```
src
 ├ components
 │   ├ Menu.jsx
 │   ├ ProductList.jsx
 │   └ ProductForm.jsx
 │
 ├ pages
 │   ├ Products.jsx
 │   └ About.jsx
 │
 ├ App.jsx
 ├ main.jsx
 └ style.css

cypress
 └ e2e
     ├ create-product.cy.js
     ├ edit-product.cy.js
     ├ delete-product.cy.js
     └ navigation.cy.js
```

---

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Entre na pasta do projeto:

```bash
cd nome-do-repositorio
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## Como executar os testes

Com a aplicação rodando, abra outro terminal e execute:

```bash
npx cypress open
```

Selecione **E2E Testing** e execute os testes disponíveis.

---

## Autor

Projeto desenvolvido como parte de um teste técnico utilizando **React** e **Cypress**.