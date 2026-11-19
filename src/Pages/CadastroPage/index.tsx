import { Link } from 'react-router-dom';

export function CadastroPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-light-gray-3 to-white flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-[4px] shadow-md w-full max-w-[600px]">
        
        {/* Cabeçalho do Cadastro */}
        <h2 className="text-[32px] font-bold text-dark-gray-2 mb-2">
          Crie sua conta
        </h2>
        <p className="text-[16px] text-dark-gray-3 mb-8">
          Já possui uma conta?{' '}
          <Link to="/login" className="text-dark-gray-2 underline hover:text-primary transition-colors">
            Entrar
          </Link>
        </p>

        {/* Formulário de Cadastro */}
        <form className="flex flex-col gap-5">
          {/* Informações Pessoais */}
          <div>
            <h3 className="text-[14px] font-bold text-dark-gray-2 mb-4 pb-2 border-b border-light-gray-2">Informações Pessoais</h3>
            
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-bold text-dark-gray-3 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  className="w-full h-[50px] bg-light-gray-3 rounded-[4px] px-4 outline-none focus:ring-2 focus:ring-primary transition-all text-dark-gray-2"
                />
              </div>
              
              <div>
                <label className="block text-[12px] font-bold text-dark-gray-3 mb-1">CPF *</label>
                <input
                  type="text"
                  placeholder="Insira seu CPF"
                  className="w-full h-[50px] bg-light-gray-3 rounded-[4px] px-4 outline-none focus:ring-2 focus:ring-primary transition-all text-dark-gray-2"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-dark-gray-3 mb-1">E-mail *</label>
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  className="w-full h-[50px] bg-light-gray-3 rounded-[4px] px-4 outline-none focus:ring-2 focus:ring-primary transition-all text-dark-gray-2"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-dark-gray-3 mb-1">Celular *</label>
                <input
                  type="tel"
                  placeholder="Insira seu celular"
                  className="w-full h-[50px] bg-light-gray-3 rounded-[4px] px-4 outline-none focus:ring-2 focus:ring-primary transition-all text-dark-gray-2"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full h-[48px] bg-primary text-white font-bold text-[16px] rounded-[8px] mt-6 hover:bg-tertiary transition-colors"
          >
            Criar Conta
          </button>
        </form>

      </div>
    </div>
  );
}