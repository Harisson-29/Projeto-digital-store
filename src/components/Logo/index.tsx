import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

interface LogoProps {
  // uma propriedade 'color' que só aceita 'dark' ou 'light'
  color?: 'dark' | 'light';
}

export function Logo({ color = 'dark' }: LogoProps) {
  // A variável src decide qual imagem usar baseada na prop 'color'
  const src = color === 'light' ? logoFooter : logoHeader;

  return (
    <img 
      src={src} 
      alt="Digital Store Logo" 
      className="w-[253px] h-[44px]" 
    />
  );
}