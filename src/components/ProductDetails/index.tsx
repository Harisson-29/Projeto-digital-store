import { Section } from '../Section';
import { ProductListing } from '../ProductListing';

export function ProductDetailsPage() {
  // Mock de produtos para a seção inferior de "Produtos Relacionados"
  const produtosRelacionados = Array(4).fill({
    name: "K-Swiss V8 - Masculino",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80",
    price: 200,
    priceDiscount: 149.9
  });

  return (
    <div className="w-full bg-light-gray-3 min-h-screen">
      <div className="px-4 md:px-16 py-8">
        
        {/* Navegação Estrutural  */}
        <p className="text-[14px] text-dark-gray-2 mb-4">
          Home / Produtos / Tênis / <span className="font-bold">Nike Shoe</span>
        </p>

        {/* Bloco Principal do Produto */}
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* LADO ESQUERDO: Galeria de Imagens */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Imagem Principal */}
            <div className="bg-white rounded-[4px] h-[300px] md:h-[500px] flex items-center justify-center p-8 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" 
                alt="Tênis Nike" 
                className="w-full h-full object-contain drop-shadow-xl" 
              />
            </div>
            
            {/* Miniaturas (Thumbnails) */}
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div 
                  key={item} 
                  className={`flex-1 h-[80px] md:h-[100px] rounded-[4px] cursor-pointer flex items-center justify-center shadow-sm border-2 transition-colors ${
                    item === 1 ? 'border-primary bg-white' : 'border-transparent bg-white hover:border-primary/50'
                  }`}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=150&q=80" 
                    alt="Miniatura" 
                    className="w-[60%] h-[60%] object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: Informações de Compra */}
          <div className="w-full md:w-1/2 flex flex-col items-start bg-white p-8 rounded-[4px] shadow-sm">
            <h1 className="text-[32px] font-bold text-dark-gray-2 mb-2 leading-tight">
              Tênis Nike Revolution 6 Next Nature Masculino
            </h1>
            <p className="text-[12px] text-dark-gray-3 mb-4 tracking-wider">
              Casual | Nike | REF:38416711
            </p>

            {/* Avaliação (Estrelas) */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-warning text-[18px]">
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-light-gray-2">★</span>
              </div>
              <span className="text-light-gray text-[14px] bg-warning/10 px-3 py-1 rounded-[4px]">
                (90 avaliações)
              </span>
            </div>

            {/* Preços */}
            <div className="flex items-center gap-3 font-bold mb-6">
              <span className="text-[16px] text-light-gray line-through">R$ 219,00</span>
              <span className="text-[32px] text-dark-gray-2">R$ 219,00</span>
            </div>

            {/* Descrição */}
            <div className="mb-6">
              <h3 className="text-[14px] font-bold text-light-gray mb-2">Descrição do produto</h3>
              <p className="text-[14px] text-dark-gray-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* Seleção de Tamanho */}
            <div className="mb-6">
              <h3 className="text-[14px] font-bold text-light-gray mb-2">Tamanho</h3>
              <div className="flex gap-3 flex-wrap">
                {['39', '40', '41', '42', '43'].map((size, index) => (
                  <button 
                    key={size} 
                    // Simulando que o tamanho 40 está selecionado
                    className={`w-[48px] h-[48px] rounded-[4px] border flex items-center justify-center text-[14px] font-bold transition-colors ${
                      index === 1 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-light-gray-2 text-dark-gray-2 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Seleção de Cor */}
            <div className="mb-8">
              <h3 className="text-[14px] font-bold text-light-gray mb-2">Tamanho</h3> 
              <div className="flex gap-3">
                {['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'].map((color, index) => (
                  <div 
                    key={index} 
                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ${
                      index === 0 ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`} 
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Botão de Comprar grande */}
            <button className="w-full md:w-[220px] h-[48px] bg-warning hover:bg-[#d99818] text-white font-bold text-[16px] rounded-[8px] transition-colors uppercase shadow-md">
              Comprar
            </button>
          </div>
        </div>
      </div>

     
      <div className="pb-10">
        <Section title="Produtos Relacionados" link={{ text: "Ver todos", href: "/produtos" }}>
          <ProductListing products={produtosRelacionados} />
        </Section>
      </div>
    </div>
  );
}