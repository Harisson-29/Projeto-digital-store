import { Link } from 'react-router-dom';

export function SpecialOffer() {
  return (
    <div className="w-full bg-white px-4 md:px-16 py-16 flex flex-col md:flex-row items-center gap-10">
      
      {/* Lado Esquerdo: Imagem do Produto */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {/* Círculo de fundo decorativo (Gradiente suave) */}
        <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-gradient-to-b from-light-gray-2/50 to-transparent rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Imagem do tênis de oferta  */}
        <img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80" 
          alt="Air Jordan Edição de Colecionador" 
          className="w-[300px] md:w-[450px] h-[300px] md:h-[400px] object-contain drop-shadow-xl rounded-lg"
        />
      </div>

      {/* Lado Direito: Textos e Botão de Ação */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
        <span className="text-primary font-bold text-[14px] tracking-wide">
          Oferta especial
        </span>
        
        <h2 className="text-dark-gray-2 text-[32px] md:text-[48px] font-bold leading-[1.2]">
          Air Jordan edição de <br /> colecionador
        </h2>
        
        <p className="text-dark-gray-2 text-[16px] leading-relaxed max-w-[450px] mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        
        <Link 
          to="/produtos" 
          className="flex items-center justify-center bg-primary text-white font-bold text-[14px] w-full md:w-[200px] h-[40px] rounded-[4px] hover:bg-tertiary transition-colors"
        >
          Ver Oferta
        </Link>
      </div>
      
    </div>
  );
}