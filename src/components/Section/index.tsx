import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';


interface SectionProps {
  title: string;
  titleAlign?: 'left' | 'center'; 
  link?: {
    text: string;
    href: string;
  }; 
  children: ReactNode; 
}

export function Section({ title, titleAlign = 'left', link, children }: SectionProps) {
  return (
    <section className="w-full px-4 md:px-16 py-10">
      {/* Cabeçalho da Seção */}
      <div 
        className={`flex items-center mb-6 ${
          titleAlign === 'center' ? 'justify-center' : 'justify-between'
        }`}
      >
        {/* Título com as cores e tamanhos exigidos (24px, dark-gray-2) */}
        <h2 className="text-[24px] font-bold text-dark-gray-2 tracking-wide">
          {title}
        </h2>
        
        {/* Renderiza o link apenas se ele for passado nas props */}
        {link && (
          <Link 
            to={link.href} 
            className="text-[18px] text-primary hover:underline flex items-center gap-2"
          >
            {link.text} <span>&rarr;</span>
          </Link>
        )}
      </div>
      
      {/* Conteúdo dinâmico da seção  */}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}