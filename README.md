# Let me Ask

Let me Ask é uma aplicação full-stack desenvolvida durante um evento da Rocketseat. O projeto permite criar e participar de salas para sessões de perguntas e respostas, facilitando a gestão e participação em discussões interativas.

## Estrutura do Projeto

- **server/**: API backend construída com Node.js, Fastify e PostgreSQL.
- **web/**: Aplicação frontend construída com React, Vite e Tailwind CSS.

---

## Backend (server)

- **Framework:** [Fastify](https://fastify.dev/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Banco de Dados:** PostgreSQL (com extensão [pgvector](https://github.com/pgvector/pgvector))
- **Validação:** [Zod](https://zod.dev/) via [fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod)
- **Seed:** [drizzle-seed](https://github.com/drizzle-team/drizzle-seed)
- **CORS:** [@fastify/cors](https://github.com/fastify/fastify-cors)

### Variáveis de Ambiente

Copie o `.env.example` para `.env` e ajuste conforme necessário:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

---

## Frontend (web)

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI:** [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Roteamento:** [React Router DOM](https://reactrouter.com/)
- **Data Fetching:** [TanStack React Query](https://tanstack.com/query/latest)
- **Utilitários:** [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge), [class-variance-authority](https://cva.style/)

---

## Rodando o Projeto

### Backend

1. Instale as dependências:
   ```sh
   cd server
   npm install
   ```
2. Copie o `.env.example` para `.env` e configure se necessário.
3. Inicie o PostgreSQL (você pode usar o Docker Compose):
   ```sh
   docker-compose up -d
   ```
4. Rode o seed do banco de dados (opcional):
   ```sh
   npm run db:seed
   ```
5. Inicie o servidor:
   ```sh
   npm run dev
   ```

### Frontend

1. Instale as dependências:
   ```sh
   cd web
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

