import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Cabeçalho fixo no topo */}
      <Header />
      
      {/* O conteúdo dinâmico (HomePage, Produtos, etc) entra aqui no meio */}
      <main className="flex-grow bg-light-gray-3">
        {children}
      </main>

      {/* Rodapé fixo na parte inferior */}
      <Footer />
    </div>
  );
}