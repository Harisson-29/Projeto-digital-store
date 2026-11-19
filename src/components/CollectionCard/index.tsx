import { Link } from 'react-router-dom';

interface CollectionCardProps {
  discount: string;
  title: string;
  image: string;
}

export function CollectionCard({ discount, title, image }: CollectionCardProps) {
  return (
    <div className="relative w-full h-[250px] bg-[#D8E3F2] rounded-[8px] p-6 md:p-8 flex flex-col justify-center items-start overflow-hidden">
      
      {/* Bloco de texto e botão por cima da imagem */}
      <div className="z-10 max-w-[60%] flex flex-col items-start">
        
        {/* Tag de Desconto */}
        <span className="inline-block bg-[#E7FF86] text-dark-gray-2 font-bold text-[14px] px-4 py-1 rounded-[29px] mb-3">
          {discount} OFF
        </span>
        
        {/* Título da Coleção */}
        <h3 className="text-[28px] md:text-[32px] font-bold text-dark-gray-2 leading-[1.15] mb-5">
          {title}
        </h3>
        
        <Link
          to="/produtos"
          className="inline-flex items-center justify-center bg-white text-primary text-[16px] font-bold w-[153px] h-[48px] rounded-[8px] hover:bg-primary hover:text-white transition-colors"
        >
          Comprar
        </Link>
      </div>

      {/* Imagem no canto inferior direito */}
      <img 
        src={image} 
        alt={title} 
        className="absolute right-0 bottom-0 w-[150px] md:w-[180px] h-[180px] object-contain pointer-events-none"
      />
    </div>
  );
}