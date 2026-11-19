import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-light-gray-3 to-white flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-[4px] shadow-md w-full max-w-[500px]">
        
        {/* Cabeçalho do Login */}
        <h2 className="text-[32px] font-bold text-dark-gray-2 mb-2">
          Acesse sua conta
        </h2>
        <p className="text-[16px] text-dark-gray-3 mb-8">
          Novo cliente?{' '}
          <Link to="/cadastro" className="text-dark-gray-2 underline hover:text-primary transition-colors">
            Cadastre-se
          </Link>
        </p>

        {/* Formulário */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-[14px] font-bold text-dark-gray-2 mb-2">
              Login *
            </label>
            <input
              type="email"
              placeholder="Insira seu login ou email"
              className="w-full h-[60px] bg-light-gray-3 rounded-[4px] px-4 outline-none focus:ring-2 focus:ring-primary transition-all text-dark-gray-2"
            />
          </div>

          <div>
            <label className="block text-[14px] font-bold text-dark-gray-2 mb-2">
              Senha *
            </label>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="w-full h-[60px] bg-light-gray-3 rounded-[4px] px-4 outline-none focus:ring-2 focus:ring-primary transition-all text-dark-gray-2"
            />
          </div>

          <Link to="/esqueci-senha" className="text-[14px] text-dark-gray-2 underline hover:text-primary transition-colors">
            Esqueci minha senha
          </Link>

          <button
            type="button"
            className="w-full h-[48px] bg-primary text-white font-bold text-[16px] rounded-[8px] mt-4 hover:bg-tertiary transition-colors"
          >
            Acessar Conta
          </button>
        </form>

        {/* Separador e Login Social */}
        <div className="flex items-center gap-4 mt-8 mb-6">
          <div className="h-[1px] bg-light-gray-2 flex-1"></div>
          <span className="text-[14px] text-dark-gray-2">Ou faça login com</span>
          <div className="h-[1px] bg-light-gray-2 flex-1"></div>
        </div>

        <div className="flex justify-center">
          <button className="w-full h-[48px] border border-light-gray-2 rounded-[4px] flex items-center justify-center gap-3 text-dark-gray-2 font-bold hover:bg-light-gray-3 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Gmail
          </button>
        </div>

      </div>
    </div>
  );
}