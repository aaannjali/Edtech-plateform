import React from 'react'
import HighLightText from './HighLightText'
import know_you_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_other from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './CTAButton'

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px]'>
      <div className='flex flex-col gap-5'>
       <div className='text-4xl font-semibold text-center'>
        Your swiss Knife For
        <HighLightText text={"Learning Any Language"} />

       </div>
       <div className='text-center text-richblack-500 mx-auto text-base mt-3 font-medium w-[70%]'>
       Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
       </div>
       <div className='flex flex-row gap-2  items-center justify-center mt-5'>
         <img src={know_you_progress} alt='knowyourprogress' className='object-contain -mr-32'/>
         <img src={compare_with_other} alt='knowyourprogress' className='object-contain'/>
         <img src={plan_your_lesson} alt='knowyourprogress' className='object-contain -ml-40'/>
       </div>
      </div>
          <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
           </div>
    </div>
  )
}

export default LearningLanguageSection
