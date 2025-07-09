# Let me Ask - Backend (server)

Este é o backend da aplicação **Let me Ask**, desenvolvido durante um evento da Rocketseat. Ele fornece uma API para gerenciamento de salas de perguntas e respostas.

## Principais Tecnologias e Bibliotecas

- **Node.js**
- **Fastify**: Framework web rápido e eficiente.
- **Drizzle ORM**: ORM para integração com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional, utilizando a extensão pgvector.
- **Zod**: Validação de dados.
- **drizzle-seed**: Seed para popular o banco de dados.
- **@fastify/cors**: Middleware para CORS.

## Estrutura

- `src/` - Código-fonte da API
- `src/db/` - Configuração do banco, seeds e schemas
- `src/http/routes/` - Rotas HTTP

## Variáveis de Ambiente

Copie `.env.example` para `.env` e configure conforme necessário:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

## Como rodar o backend

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o PostgreSQL (pode usar Docker Compose):
   ```sh
   docker-compose up -d
   ```
3. Rode o seed do banco de dados (opcional):
   ```sh
   npm run db:seed
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```

A API estará disponível em `http://localhost:3333`.

## Scripts principais
- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm run db:seed`: Popula o banco de dados com dados de exemplo
