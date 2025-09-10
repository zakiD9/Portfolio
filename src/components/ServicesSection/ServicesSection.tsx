import CustomText from "../ui/CustomText";
import { GenericSlider } from "../ui/GenericSlider";
import { cardData } from '../../data/data';
import backPic from "../../assets/Frame 327 (Copy).png";



export default function ServicesSection(){
    
    return(
        <div className="relative flex flex-col w-full min-h-[878px] gap-16 sm:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-16 sm:py-[116px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden -translate-y-8 sm:-translate-y-0 md:-translate-y-15 lg:translate-y-0 -mt-14">
        <img
          src={backPic}
          alt="image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">
          <div className="flex gap-2.5">
            <CustomText title="My" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomText title="Services" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-primary" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-base sm:text-lg lg:text-[20px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-start justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-[500px] sm:h-[550px]"
            cardType="hover"
          />
        </div>
      </div>
    )
}