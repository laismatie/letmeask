# Let me Ask - Backend (server)

Este é o backend da aplicação **Let me Ask**, desenvolvido durante um evento da Rocketseat. Ele fornece uma API para gerenciamento de salas de perguntas e respostas com funcionalidades de IA para transcrição de áudio e geração de embeddings.

## Principais Tecnologias e Bibliotecas

- **Node.js** com TypeScript
- **Fastify**: Framework web rápido e eficiente
- **@fastify/multipart**: Middleware para upload de arquivos
- **@fastify/cors**: Middleware para CORS
- **fastify-type-provider-zod**: Integração de tipos Zod com Fastify
- **Drizzle ORM**: ORM para integração com o banco de dados PostgreSQL
- **PostgreSQL**: Banco de dados relacional, utilizando a extensão pgvector para embeddings
- **Zod**: Validação de dados e schemas
- **@google/genai**: SDK oficial do Google para integração com modelos Gemini
- **pgvector**: Extensão PostgreSQL para armazenamento e busca de vetores
- **drizzle-kit**: CLI para gerenciamento de migrações
- **drizzle-seed**: Seed para popular o banco de dados
- **Biome**: Linter e formatter para TypeScript/JavaScript

## Funcionalidades

- **Transcrição de Áudio**: Utiliza o modelo Gemini 2.5 Flash para transcrever áudio em português brasileiro
- **Geração de Embeddings**: Usa o modelo text-embedding-004 para criar vetores de 768 dimensões
- **Armazenamento de Vetores**: Utiliza pgvector para armazenar embeddings no PostgreSQL
- **API REST**: Endpoints para gerenciamento de salas, perguntas e upload de áudio

## Estrutura

- `src/` - Código-fonte da API
- `src/db/` - Configuração do banco, seeds, schemas e migrações
- `src/http/routes/` - Rotas HTTP da API
- `src/services/` - Serviços de IA (Gemini)
- `docker/` - Configuração do PostgreSQL com pgvector

## Variáveis de Ambiente

Copie `.env.example` para `.env` e configure conforme necessário:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=sua_chave_api_gemini
```

## Como rodar o backend

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o PostgreSQL com pgvector (usando Docker Compose):
   ```sh
   docker-compose up -d
   ```
3. Execute as migrações do banco de dados:
   ```sh
   npm run db:migrate
   ```
4. Rode o seed do banco de dados (opcional):
   ```sh
   npm run db:seed
   ```
5. Inicie o servidor:
   ```sh
   npm run dev
   ```

A API estará disponível em `http://localhost:3333`.

## Scripts principais

- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm run start`: Inicia o servidor em produção
- `npm run db:generate`: Gera novas migrações baseadas no schema
- `npm run db:migrate`: Executa as migrações pendentes
- `npm run db:seed`: Popula o banco de dados com dados de exemplo

## Endpoints da API

- `POST /rooms` - Criar uma nova sala
- `GET /rooms` - Listar todas as salas
- `POST /rooms/:roomId/questions` - Criar uma pergunta em uma sala
- `GET /rooms/:roomId/questions` - Listar perguntas de uma sala
- `POST /rooms/:roomId/audio` - Upload e transcrição de áudio
