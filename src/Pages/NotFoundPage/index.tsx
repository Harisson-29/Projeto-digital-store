import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="w-full min-h-[70vh] bg-light-gray-3 flex flex-col items-center justify-center px-4 py-16 text-center">
      <span className="text-[96px] md:text-[120px] font-extrabold text-primary leading-none">
        404
      </span>
      <h1 className="text-[24px] md:text-[32px] font-bold text-dark-gray-2 mt-4 mb-2">
        Página não encontrada
      </h1>
      <p className="text-[16px] text-dark-gray-3 max-w-[440px] mb-8">
        A aba ou página que você tentou acessar ainda está em construção ou não existe.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center bg-primary hover:bg-tertiary text-white font-bold text-[14px] px-8 h-[48px] rounded-[8px] transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}