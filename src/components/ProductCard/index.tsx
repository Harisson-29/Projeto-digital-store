// 1. Importamos o componente Link do React Router
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  priceDiscount?: number;
}

export function ProductCard({ image, name, price, priceDiscount }: ProductCardProps) {
  return (
   
    <Link to="/produto" className="flex flex-col w-[292px] cursor-pointer hover:opacity-90 transition-opacity">
      
      <div className="w-[292px] h-[321px] bg-white shadow-sm rounded-[4px] flex items-center justify-center mb-4 p-4">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-[12px] font-bold text-light-gray tracking-widest mb-1 uppercase">
        Tênis
      </h3>
      
      <p className="text-[24px] text-dark-gray-2 mb-2 leading-tight">
        {name}
      </p>

      <div className="flex items-center gap-3 font-bold">
        {priceDiscount ? (
          <>
            <span className="text-[24px] text-light-gray line-through">
              ${price}
            </span>
            <span className="text-[24px] text-dark-gray">
              ${priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[24px] text-dark-gray">
            ${price}
          </span>
        )}
      </div>
      
    </Link>
  );
}