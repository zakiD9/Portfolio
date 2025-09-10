import CustomText from "./ui/CustomText";
import {experiences } from '..//data/data';




export default function WorkExperience(){

    return(
        <section id="about" className="w-full min-h-[600px] lg:h-[827px] flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-[71px] py-8 lg:py-16">
        <div className="w-full h-auto lg:h-[234px] flex lg:flex-row items-start justify-center space-x-2.5 mb-8 lg:mb-16 text-center lg:text-left">
          <CustomText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-primary" />
          <CustomText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-primary" />
        </div>

        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="flex-1">
                  <CustomText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
                  <CustomText title={exp.duration} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
                  <CustomText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
                  {exp.desc && (
                    <CustomText title={exp.desc} className="text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto lg:h-[438px] hidden lg:flex justify-evenly">
          <div className="flex flex-col justify-between w-[495px] h-[438px] gap-[102px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomText title={exp.company} className="font-semibold text-[#1D2939] text-[40px]" />
                <CustomText title={exp.duration} className="text-2xl text-[#98A2B3]" />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-between">
            <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between w-[444px] h-[400px] gap-[48px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomText title={exp.role} className="font-semibold text-[#1D2939] text-[40px]" />
                {exp.desc && (
                  <CustomText title={exp.desc} className="text-2xl text-[#98A2B3]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}