import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DualToggleButtons() {
  const [active, setActive] = useState<"portfolio" | "hire">("portfolio");

  return (
    <div className="flex border-b-2 border-white bg-white/10 backdrop-blur-[5px] rounded-full gap-[10px] p-[10px] w-[367px] h-[82px] items-center justify-center">
      <button
        onMouseEnter={() => setActive("portfolio")}
        className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "portfolio"
              ? "bg-primary text-white font-medium text-[25px] w-[208px] h-[62px] border border-[#D0D5DD] shadow-md"
              : "bg-transparent text-white font-light text-[18px] w-[129px] h-[54px]"
          }`}
      >
        Portfolio
        <ArrowUpRight
          size={16}
          className={`transition-all duration-300 ${
            active === "portfolio"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </button>
      <button
        onMouseEnter={() => setActive("hire")}
        className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "hire"
              ? "bg-primary text-white font-medium text-[25px] w-[208px] h-[62px] border border-[#D0D5DD] shadow-md"
              : "bg-transparent text-white font-light text-[18px] w-[129px] h-[54px]"
          }`}
      >
        Hire me
        <ArrowUpRight
          size={16}
          className={`transition-all duration-300 ${
            active === "hire"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
}