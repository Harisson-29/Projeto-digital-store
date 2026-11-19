import { Gallery } from '../../components/Gallery';
import { Section } from '../../components/Section';
import { CollectionCard } from '../../components/CollectionCard';
import { CategoryIcons } from '../../components/CategoryIcons';
import { ProductListing } from '../../components/ProductListing';
import { SpecialOffer } from '../../components/SpecialOffer';

export function HomePage() {
  const imagensBanner = [
    { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" },
    { src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80" },
    { src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80" }
  ];

  const imagemTenis = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80";

  const produtosEmAlta = [
    { name: "K-Swiss V8 - Masculino", image: imagemTenis, price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: imagemTenis, price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: imagemTenis, price: 200 },
    { name: "K-Swiss V8 - Masculino", image: imagemTenis, price: 200 },
    { name: "K-Swiss V8 - Masculino", image: imagemTenis, price: 200, priceDiscount: 149.9 }
  ];

  return (
    <div>
      {/* Banner Principal */}
      <Gallery images={imagensBanner} />
      
      {/* Coleções em Destaque  */}
      <div className="pt-10">
        <Section title="Coleções em destaque">
          <div className="flex flex-col md:flex-row gap-6">
            <CollectionCard 
              discount="30%" 
              title="Novo drop Supreme" 
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80"
            />
            <CollectionCard 
              discount="30%" 
              title="Coleção Adidas" 
              image="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=200&q=80"
            />
            <CollectionCard 
              discount="30%" 
              title="Novo Beats Bass" 
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </Section>
      </div>

      {/* Categorias em Ícones Redondos  */}
      <div className="mt-16">
        <Section title="Coleções em destaque" titleAlign="center">
          <CategoryIcons />
        </Section>
      </div>

      {/* Produtos em Alta */}
      <div className="bg-light-gray-3 py-10 mt-16">
        <Section title="Produtos em alta" link={{ text: "Ver todos", href: "/produtos" }}>
          <ProductListing products={produtosEmAlta} />
        </Section>
      </div>

      {/* Oferta Especial */}
      <SpecialOffer />
    </div>
  );
}