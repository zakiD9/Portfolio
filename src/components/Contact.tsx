import ClientOnly from "./ui/ClientOnly";
import CustomText from "./ui/CustomText";
import { iconAndText } from '../data/data';
import { Button } from "./ui/button";
import { MessageSquareCodeIcon } from "lucide-react";




export default function Contact(){

    return(
        <section id="contact" className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomText
            title="Have an Awesome Project"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-primary"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-blue-100 shrink-0">
            <MessageSquareCodeIcon />
          </div>

          <ClientOnly>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
            />

            <Button className="text-xl py-6 rounded-full">Send</Button>
          </ClientOnly>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </section>
    )
}