interface InfoItem {
  text: string;
  link: string;
}

interface InformationProps {
  title: string;
  informations: InfoItem[];
}

export function Information({ title, informations }: InformationProps) {
  return (
    <div>
      <h3 className="text-[18px] font-bold text-white mb-4">{title}</h3>
      <ul className="flex flex-col gap-2">
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link} className="text-[14px] text-white hover:text-primary transition-colors">
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}