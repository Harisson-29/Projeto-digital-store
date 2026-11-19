interface FilterOption {
  text: string;
  value: string;
}

interface FilterGroupProps {
  title: string;
  inputType: 'checkbox' | 'radio';
  options: FilterOption[];
}

export function FilterGroup({ title, inputType, options }: FilterGroupProps) {
  return (
    <div className="mb-6">
      <h3 className="text-[14px] font-bold text-dark-gray-2 mb-3">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer">
            <input 
              type={inputType} 
              name={title} // O name agrupa os radio buttons
              value={option.value}
              className="w-5 h-5 accent-primary cursor-pointer"
            />
            <span className="text-[14px] text-dark-gray-2">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}