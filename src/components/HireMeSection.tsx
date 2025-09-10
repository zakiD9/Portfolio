import ClientOnly from "./ui/ClientOnly";
import CustomText from "./ui/CustomText";
import back from "../assets/Property 1=Default.svg";
import myPhoto from "../assets/Property 1=Variant2.svg";


export default function HireMe(){

    return(
        <section id="Resume" className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
    
        <img
        src={back}
        alt="Hire me"
        className="absolute inset-0 w-full h-full object-contain z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
        />

  
        <img
        src={myPhoto}
        alt="Hire me"
        className="absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
        />
        </div>


        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomText title="Why" className="text-[#344054]" />
            <CustomText title="Hire me" className="text-primary" />
            <CustomText title="?" className="text-[#344054]" />
          </div>

          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex flex-col">
              <CustomText
                title="450+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomText
                title="Project Completed"
                className="text-lg text-[#667085]"
              />
            </div>
            <div className="flex flex-col">
              <CustomText
                title="450+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomText
                title="Project Completed"
                className="text-lg text-[#667085]"
              />
            </div>
          </div>

          <ClientOnly>
            <button className="w-full cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white">
              Hire me
            </button>
          </ClientOnly>
        </div>
      </section>
    )
}