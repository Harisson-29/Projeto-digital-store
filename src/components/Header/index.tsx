import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../Logo';

export function Header() {
  // Gerencia o estado de abertura do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white p-4 relative z-50">
      {/* Topo: Comportamento dinâmico entre Mobile e Desktop */}
      <div className="flex items-center justify-between">
        
        {/* Botão Hambúrguer (Visível apenas no Mobile) */}
        <button 
          className="md:hidden p-2 text-dark-gray-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Logo />

        {/* Bloco Central e Ações (Visível apenas no Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-8">
          
          <div className="flex-1 max-w-[600px] bg-light-gray-3 h-[60px] rounded-[8px] px-4 flex items-center">
             <span className="text-light-gray">Pesquisar produto...</span>
          </div>

          <div className="flex items-center gap-8 ml-8">
            <Link to="/cadastro" className="text-[16px] text-dark-gray-2 underline">
              Cadastre-se
            </Link>
            <Link to="/login" className="flex items-center justify-center w-[114px] h-[40px] bg-primary text-white font-bold text-[14px] rounded-[4px]">
              Entrar
            </Link>
            <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
          </div>
        </div>

        {/* Ícones da Direita (Visível apenas no Mobile) */}
        <div className="flex md:hidden items-center gap-4 text-dark-gray-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
        </div>
      </div>

      {/* Navegação Desktop (Visível apenas no Desktop) */}
      <nav className="hidden md:flex mt-6 gap-8 text-[16px]">
        {[
          { name: 'Home', path: '/' },
          { name: 'Produtos', path: '/produtos' },
          { name: 'Categorias', path: '/categorias' },
          { name: 'Meus Pedidos', path: '/meus-pedidos' }
        ].map((link) => (
          <NavLink 
            key={link.name}
            to={link.path}
            className={({ isActive }) => 
              isActive 
                ? "text-primary font-bold border-b-2 border-primary pb-1" 
                : "text-dark-gray-2 hover:text-primary transition-colors pb-1"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Menu Lateral Mobile (Renderizado condicionalmente pelo useState) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col md:hidden">
          <h3 className="text-[16px] font-bold text-dark-gray-2 mb-4">Páginas</h3>
          
          <nav className="flex flex-col gap-4 mb-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'Produtos', path: '/produtos' },
              { name: 'Categorias', path: '/categorias' },
              { name: 'Meus Pedidos', path: '/meus-pedidos' }
            ].map((link) => (
              <NavLink 
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-bold" 
                    : "text-dark-gray-2"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <hr className="border-light-gray-2 mb-6" />
          
          <div className="flex flex-col gap-4">
            <Link to="/login" className="flex items-center justify-center w-[114px] h-[40px] bg-primary text-white font-bold text-[14px] rounded-[4px]">
              Entrar
            </Link>
            <Link to="/cadastro" className="text-[16px] text-dark-gray-2 underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}