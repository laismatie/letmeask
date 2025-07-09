# Let me Ask - Frontend (web)

Este é o frontend da aplicação **Let me Ask**, desenvolvido durante um evento da Rocketseat. Ele permite a criação e participação em salas de perguntas e respostas de forma interativa.

## Principais Tecnologias e Bibliotecas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **Tailwind CSS**: Para estilização com classes utilitárias.
- **Radix UI**: Componentes acessíveis e semânticos.
- **Lucide React**: Ícones SVG para React.
- **React Router DOM**: Roteamento.
- **TanStack React Query**: Gerenciamento de dados assíncronos.
- **clsx, tailwind-merge, class-variance-authority**: Utilitários para manipulação de classes CSS.

## Estrutura

- `src/` - Código-fonte do frontend
- `src/pages/` - Páginas principais (criação de sala, sala)
- `src/components/` - Componentes reutilizáveis
- `src/lib/` - Funções utilitárias

## Como rodar o frontend

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:5173`.

## Scripts principais
- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente
