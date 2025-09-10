import CustomText from "./ui/CustomText";
import { GenericSlider } from "./ui/GenericSlider";
import { reviews } from '../data/data';
import bgPic from "../assets/Frame 327 (Copy).png";



export default function Testimonials(){

    return(
         <div className="relative flex flex-col w-screen min-h-[900px] items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-[96px]  gap-12 bg-[#171717] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden">
        <img
          src={bgPic}
          alt="image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
          <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
            <CustomText
              title="Testimonials That"
              className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD] text-center"
            />
            <div className="flex flex-wrap gap-2.5 justify-center">
              <CustomText
                title="Speak to"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD]"
              />
              <CustomText
                title="My Result"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-primary"
              />
            </div>
          </div>
          <p className="w-full max-w-[742px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#F9FAFB] text-center leading-[1.6] px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
          </p>
        </div>

        <div className="absolute bottom-[20%] left-0 right-0 w-full z-10">
          <GenericSlider
            data={reviews}
            slidesPerView={3}
            heightClass=""
            cardType="review"
          />
        </div>
      </div>
    )
}