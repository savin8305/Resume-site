import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";


const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text bg-red-100 tracking-[4px]">2018-2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
             title="Web Developer & Trainer"
             subTitle="subtitle should be short and clear "
             result="MALAYSIA"
             des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio.
             ."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="subtitle should be short and clear "
            result="MALAYSIA"
            des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio.
            ."
          />
          <ResumeCard
             title="Web Developer & Trainer"
             subTitle="subtitle should be short and clear "
             result="MALAYSIA"
             des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio.
             ."    />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="subtitle should be short and clear "
            result="MALAYSIA"
            des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio.
            ."    
          />
   
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="subtitle should be short and clear "
            result="MALAYSIA"
            des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio.
            ."  />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="subtitle should be short and clear "
            result="MALAYSIA"
            des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio.
            ."/>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
