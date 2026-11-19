import { useState } from 'react';

export function CategoryIcons() {
  const [selected, setSelected] = useState('Camisetas');

  const categories = [
    {
      name: 'Camisetas',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 4.5L3 7.5l2.5 2.5L7 8.5V19.5h10V8.5l1.5 1.5L21 7.5l-3.5-3h-2.5a3 3 0 01-6 0H6.5z" />
        </svg>
      ),
    },
    {
      name: 'Calças',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10l1 16h-4l-2-9-2 9H6L7 4z" />
        </svg>
      ),
    },
    {
      name: 'Bonés',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 15a8 8 0 0116 0v1H4v-1zm16 1h2a1 1 0 010 2H4a1 1 0 010-2" />
        </svg>
      ),
    },
    {
      name: 'Headphones',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 13a8 8 0 0116 0v5a2 2 0 01-2 2h-1a1 1 0 01-1-1v-4a1 1 0 011-1h3M4 13v5a2 2 0 002 2h1a1 1 0 001-1v-4a1 1 0 00-1-1H4" />
        </svg>
      ),
    },
    {
      name: 'Tênis',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16c0 1.5 1 2 2.5 2h13c1.5 0 2.5-.5 2.5-2 0-1.2-.8-2-2.5-2.5L14 12l-2.5-4-2 2-3-1L4 12.5 3 16z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {categories.map((cat) => {
        const isSelected = selected === cat.name;
        return (
          <button
            key={cat.name}
            type="button"
            onClick={() => setSelected(cat.name)}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div
              className={`w-[104px] h-[104px] bg-white rounded-full shadow-md flex items-center justify-center transition-all group-hover:scale-105 ${
                isSelected ? 'text-primary' : 'text-dark-gray-3 hover:text-primary'
              }`}
            >
              {cat.icon}
            </div>
            <span className="text-[14px] font-bold text-dark-gray-2">
              {cat.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}