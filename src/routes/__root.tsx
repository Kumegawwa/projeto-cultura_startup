import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#fd0517]">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-gray-400">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#fd0517] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#d00412]"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-[#fd0517]">
          Ocorreu um erro
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Algo deu errado do nosso lado. Você pode tentar atualizar ou voltar para a página inicial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-[#fd0517] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#d00412]"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#222222] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a]"
          >
            Ir para a Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sistema Dinâmico de Semáforos para Emergências" },
      { name: "description", content: "Onda verde preditiva para reduzir o tempo de resposta do SAMU e Corpo de Bombeiros. Mobilidade inteligente a favor da vida." },
      { property: "og:title", content: "Sistema Dinâmico de Semáforos para Emergências" },
      { property: "og:description", content: "Onda verde preditiva para reduzir o tempo de resposta do SAMU e Corpo de Bombeiros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      // Aqui está o seu favicon (apontando para a pasta public)
      { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}