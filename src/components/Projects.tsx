import ArrowButton from "./ui/ArrowButton";
import { Button } from "./ui/button";
import ClientOnly from "./ui/ClientOnly";
import CustomText from "./ui/CustomText";
import { GenericSlider } from "./ui/GenericSlider";
import { buttons, portfolioData } from '../data/data';



export default function Projects(){

    return(
        <section id="project" className=" w-screen flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomText
                title="my"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
              />
              <CustomText
                title="Portfolio"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-primary"
              />
            </div>
          </div>

          <div className="shrink-0">
            <Button className="rounded-full text-xl py-7" size="lg">See All</Button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          
        </div>
      </section>
    )
}