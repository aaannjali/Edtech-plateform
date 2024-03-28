import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
        {
                Logo: Logo1,
                heading: "Leadership",
                Description: "Fully committed to the success company",

        },
        {
                Logo: Logo2,
                heading: "Responsibility",
                Description: "Students will always be our top priority",

        },
        {
                Logo: Logo3,
                heading: "Flexibility",
                Description: "The ability to switch is an important skills",

        },
        {
                Logo: Logo4,
                heading: "Solve the problem",
                Description: "Code your way to a solution",

        },

]

const TimeLine = () => {
  return (
    <div>
         <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {timeline.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    timeline.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>


        <div className='relative shadow-[0px_0px_30px_0px]'>
           <img src={timelineImage}
           alt='timelineImage'
           className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit" />
           
           <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-row items-center border-r border-caribbeangreen-300 gap-5 px-7'>
                <p className='text-3xl font-bold '>10</p>
                <p className='text-caribbeangreen-300 text-sm '>years of experience</p>
            </div>
            

            <div className='flex items-center px-7 gap-5'>
                <p className='text-3xl font-bold '>250</p>
                <p className='text-caribbeangreen-300 text-sm '>Type of course</p>
            </div>
           </div>

        </div>

      </div>
    </div>
  )
}

export default TimeLine
