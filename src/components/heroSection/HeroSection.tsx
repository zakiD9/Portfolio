import { Star } from "lucide-react";
import myPhoto from "../../assets/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png";
import heroFrame from "../../assets/Frame 68.svg";
import DualToggleButtons from "../ui/DualButtons";
import ClientOnly from "../ui/ClientOnly";
import CustomText from "../ui/CustomText";




export default function HeroSection(){

    return(
        <section id="home" className="group flex flex-col md:flex-row w-full min-h-[600px] sm:min-h-[700px] lg:h-[700] lg:-mb-2 xl:mb-0 xl:h-[846px] px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-6">
        <div className="hidden lg:flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">&quot;</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            D9&apos;s exceptional Frontend Developer ensured our website&apos;s success.
            <br />
            Highly recommended.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="flex w-full max-w-[952px] flex-col items-center justify-center  transition-all duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-6">
            <ClientOnly>
              <button className="h-[45px] px-[26px] py-[13px] translate-y-0 md:translate-y-10 rounded-full border border-[#171717] flex items-center justify-center bg-white mt-10">
                Hello!
              </button>
            </ClientOnly>
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <CustomText title="I&apos;m" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              <div className="flex items-end">
                <CustomText title="D9" className="text-primary font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
                <CustomText title="," className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              </div>
            </div>
            <CustomText title="Web Developer" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px] text-center" />
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-blue-200 rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <img
                src={heroFrame}
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
              />
            </div>

            <img
              src={myPhoto}
              alt="abhiruchi"
              width={952}
              height={636}
              className="relative z-20 w-full h-auto object-contain mt-5"
            />

            <div className="absolute bottom-[10%] z-30 w-full hidden md:flex justify-center">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[169px] h-[125px] flex-col items-end justify-end gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#2350CC" stroke="#2350CC" />
            ))}
          </div>
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            +1 Years
          </h1>
          <p className="text-sm text-[#171717]">Experience</p>
        </div>
      </section>
    )
}