import { useState } from 'react';

interface GalleryProps {
  images: Array<{ src: string }>;
}

export function Gallery({ images }: GalleryProps) {
  // Estado para saber qual imagem/bolinha está ativa (começa na 0)
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full bg-light-gray-3 py-12 md:py-24 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Lado Esquerdo: Textos e Botão */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4 z-10">
        <span className="text-warning font-bold text-[14px] md:text-[16px] tracking-wide">
          Melhores ofertas personalizadas
        </span>
        
        <h1 className="text-dark-gray-2 text-[40px] md:text-[64px] font-extrabold leading-[1.1]">
          Queima de <br /> estoque Nike 🔥
        </h1>
        
        <p className="text-dark-gray-2 text-[16px] md:text-[18px] max-w-[400px] leading-relaxed mt-2">
          Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
        </p>
        
        <button className="mt-6 bg-primary text-white font-bold text-[14px] md:text-[16px] w-full md:w-[220px] h-[48px] rounded-[8px] hover:bg-tertiary transition-colors">
          Ver Ofertas
        </button>
      </div>

      {/* Lado Direito: Imagem do Tênis */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center z-10">
        <img 
          src={images[currentSlide].src} 
          alt="Tênis em oferta" 
          
          className="w-[300px] md:w-[500px] h-[300px] md:h-[400px] object-contain drop-shadow-2xl transition-all duration-500 rounded-lg"
        />
      </div>

      {/* Bolinhas de Navegação (Dots) no rodapé do banner */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-primary' : 'bg-light-gray-2'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}