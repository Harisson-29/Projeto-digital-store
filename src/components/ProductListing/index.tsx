import { ProductCard } from '../ProductCard';

// Tipagem do produto 
interface Product {
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
}

interface ProductListingProps {
  products: Product[];
}

export function ProductListing({ products }: ProductListingProps) {
  return (
  
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      
  
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
      
    </div>
  );
}