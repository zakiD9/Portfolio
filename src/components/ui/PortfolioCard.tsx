import ArrowButton from './ArrowButton';
import { PortfolioItem } from '../../data/data';

interface PortfolioCardProps extends PortfolioItem {
  priority?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, href, desc }) => {
  return (
    <div
      className="relative group 
        w-full 
        md:w-[633px] h-[250px] md:h-[371px] 
        md:max-w-none 
        rounded-[16px] md:rounded-[20px] 
        overflow-hidden transition-all duration-300 cursor-pointer 
        shadow-md"
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(225deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.72) 83%, rgba(0, 0, 0, 1) 100%)',
          opacity: 0.4,
        }}
      />

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        <div className="flex justify-end p-2 md:p-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] 
              rounded-full border-2 border-primary 
              group-hover:bg-primary 
              flex items-center justify-center 
              transition-all duration-300"
          >
            <ArrowButton className="transition-all duration-300 stroke-primary group-hover:stroke-white" />
          </a>
        </div>

        <h1 className="px-3 pb-2 md:px-4 md:pb-4 font-bold 
          text-[24px] sm:text-[28px] md:text-[70px] 
          text-[#FFFAF5] leading-[1]"
        >
          {title}
        </h1>

        <div className="absolute bottom-0 left-0 right-0 
          w-[92%] mx-auto mb-3 md:mb-4 
          bg-black/40 backdrop-blur-md 
          rounded-[16px] md:rounded-[20px] 
          px-4 md:px-6 py-3 md:py-4 
          opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-500 ease-in-out z-30"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-white mb-1 md:mb-2 text-center md:text-left">
            {title}
          </h1>
          <p className="text-white text-sm leading-relaxed text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;