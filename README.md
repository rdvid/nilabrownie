# Ateliê do Brownie

Site vitrine de brownies artesanais sob encomenda, construído com TanStack Start e [Lovable](https://lovable.dev).

## Desenvolvimento

Requisitos: Node.js 22+ e npm.

```sh
git clone https://github.com/rdvid/nilabrownie.git
cd nilabrownie
npm ci
npm run dev
```

Edite textos, produtos e contatos em [`src/config/site.ts`](src/config/site.ts).

## Produção (GitHub Pages)

- **URL canônica:** [https://rdvid.github.io/nilabrownie/](https://rdvid.github.io/nilabrownie/)
- **Build:** `npm run build` gera os arquivos estáticos em `.output/public` (pré-renderização da home e `sitemap.xml`).
- **Deploy:** o workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) publica `.output/public` no push para `main`. No repositório GitHub, configure **Settings → Pages → Build and deployment → GitHub Actions**.

Para outro domínio ou ambiente de preview, defina `VITE_SITE_URL` no build (sem barra final), por exemplo:

```sh
VITE_SITE_URL=https://seu-dominio.com npm run build
```

## Scripts

| Comando        | Descrição              |
| -------------- | ---------------------- |
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build`| Build de produção      |
| `npm test`     | Testes (Vitest)        |
| `npm run lint` | ESLint                 |

## Stack

- TanStack Start / Router
- React 19, TypeScript
- Tailwind CSS 4

## Segurança (dependências)

Após `npm install`, execute `npm audit`. Vulnerabilidades em dependências **transitivas** de ferramentas (por exemplo Zod em pacotes TanStack) podem exigir atualizações major upstream; a dependência direta `zod` foi removida por não ser usada no código da aplicação.

## Built with Lovable

Este projeto pode ser editado no [Lovable](https://lovable.dev). Commits na branch conectada sincronizam com o editor. Evite reescrever histórico git já publicado (force push, rebase de commits enviados).
