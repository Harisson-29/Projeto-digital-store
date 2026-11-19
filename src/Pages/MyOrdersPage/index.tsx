import { Link } from 'react-router-dom';

export function MyOrdersPage() {
  const pedidos = [
    {
      id: '2234981932',
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80',
      status: 'Produto em trânsito',
      statusColor: 'text-warning',
    },
    {
      id: '4495810492',
      name: 'K-Swiss V8 - Masculino',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=200&q=80',
      status: 'Finalizado',
      statusColor: 'text-[#52CA76]',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-light-gray-3 px-4 md:px-16 py-10">
      <div className="max-w-[900px] mx-auto bg-white p-6 md:p-8 rounded-[4px] shadow-sm">
        <div className="flex items-center justify-between border-b border-light-gray-2 pb-4 mb-6">
          <h1 className="text-[18px] font-bold text-dark-gray-2">Meus Pedidos</h1>
          <span className="text-[14px] font-bold text-dark-gray-3 uppercase hidden md:block">
            Status
          </span>
        </div>

        <div className="flex flex-col divide-y divide-light-gray-2">
          {pedidos.map((pedido) => (
            <div
              key={pedido.id}
              className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[58px] bg-[#E2E3FF] rounded-[4px] flex items-center justify-center p-2 shrink-0">
                  <img
                    src={pedido.image}
                    alt={pedido.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[12px] text-light-gray block">
                    Pedido nº {pedido.id}
                  </span>
                  <Link
                    to="/produto"
                    className="text-[14px] font-bold text-dark-gray-2 hover:text-primary transition-colors"
                  >
                    {pedido.name}
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end">
                <span className="text-[12px] font-bold text-dark-gray-3 md:hidden">Status:</span>
                <span className={`text-[14px] font-bold ${pedido.statusColor}`}>
                  {pedido.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}