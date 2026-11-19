import { useState } from 'react';
import { FilterGroup } from '../../components/FilterGroup';
import { ProductListing } from '../../components/ProductListing';

export function ProductListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const produtos = Array(15).fill({
    name: "K-Swiss V8 - Masculino",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80",
    price: 200,
    priceDiscount: 149.9
  });

  // Conteúdo dos filtros reaproveitado tanto no Desktop quanto no Drawer Mobile
  const filterContent = (
    <>
      <FilterGroup 
        title="Marca" 
        inputType="checkbox"
        options={[
          { text: 'Adiddas', value: 'adidas' },
          { text: 'Calenciaga', value: 'calenciaga' },
          { text: 'K-Swiss', value: 'kswiss' },
          { text: 'Nike', value: 'nike' },
          { text: 'Puma', value: 'puma' }
        ]} 
      />

      <FilterGroup 
        title="Categoria" 
        inputType="checkbox"
        options={[
          { text: 'Esporte e lazer', value: 'esporte' },
          { text: 'Casual', value: 'casual' },
          { text: 'Utilitário', value: 'utilitario' },
          { text: 'Corrida', value: 'corrida' }
        ]} 
      />

      <FilterGroup 
        title="Gênero" 
        inputType="checkbox"
        options={[
          { text: 'Masculino', value: 'masculino' },
          { text: 'Feminino', value: 'feminino' },
          { text: 'Unissex', value: 'unissex' }
        ]} 
      />

      <FilterGroup 
        title="Estado" 
        inputType="radio"
        options={[
          { text: 'Novo', value: 'novo' },
          { text: 'Usado', value: 'usado' }
        ]} 
      />
    </>
  );

  return (
    <div className="w-full bg-light-gray-3 min-h-screen px-4 md:px-16 py-8 relative">
      
      {/* Topo: Ordenar por + Botão de Filtro (Mobile) + Resultados */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <p className="text-[14px] md:text-[16px] text-dark-gray-2 font-bold">
          Resultados para "Tênis" - <span className="font-normal text-dark-gray-3">389 produtos</span>
        </p>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none border border-dark-gray-2/20 rounded-[4px] px-4 h-[52px] bg-white flex items-center">
            <label className="text-[14px] md:text-[16px] text-dark-gray-2 font-bold flex items-center justify-between w-full gap-2 cursor-pointer">
              <span>Ordenar por:</span>
              <select className="font-normal bg-transparent outline-none cursor-pointer">
                <option>Mais relevantes</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
              </select>
            </label>
          </div>

          {/* Botão Rosa de Filtro (apenas no Mobile) */}
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            aria-label="Abrir filtros"
            className="md:hidden w-[52px] h-[52px] bg-primary hover:bg-tertiary text-white rounded-[8px] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer Lateral de Filtros (Mobile) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Painel Branco dos Filtros */}
          <div className="w-[300px] max-w-[80%] bg-white h-full p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-light-gray-2 pb-4 mb-6">
              <h2 className="text-[16px] font-bold text-dark-gray-2">Filtrar por</h2>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                aria-label="Fechar filtros"
                className="text-dark-gray-2 hover:text-primary p-1 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {filterContent}
          </div>

          <div
            className="flex-1 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="hidden md:block w-[300px] bg-white p-8 rounded-[4px] h-fit">
          <h2 className="text-[16px] font-bold text-dark-gray-2 mb-6 border-b border-light-gray-2 pb-4">
            Filtrar por
          </h2>
          {filterContent}
        </aside>

        <div className="flex-1">
          <ProductListing products={produtos} />
        </div>
      </div>
    </div>
  );
}