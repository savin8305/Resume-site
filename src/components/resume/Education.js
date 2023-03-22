import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018-2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Schooling</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Higher Secondary"
            subTitle="SARDAR PATEL HS SCHOOL"
            result="4/5"
            des="Sardar Patel Higher Secondary School in Jaypee Nagar, Rewa is a reputed educational institution that offers quality education to students, with a focus on academic excellence and overall personality development."
             />
          <ResumeCard
             title="Class XII"
             subTitle="SARDAR PATEL HS SCHOOL"
             result="85.68%"
             des="Sardar Patel Higher Secondary School in Jaypee Nagar, Rewa is a reputed educational institution that offers quality education to students, with a focus on academic excellence and overall personality development."
             />
          <ResumeCard
              title="Class X"
              subTitle="SARDAR PATEL HS SCHOOL"
              result="93.45%"
              des="Sardar Patel Higher Secondary School in Jaypee Nagar, Rewa is a reputed educational institution that offers quality education to students, with a focus on academic excellence and overall personality development."
              />  
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech Computer Science"
            subTitle="JUET"
            result="7.0/10"
            des="Jaypee University of Engineering and Technology in Guna, India is a reputable engineering university that offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines."
          />
          <ResumeCard
           title="Btech Computer Science"
           subTitle="JUET"
           result="7.1/10"
           des="Jaypee University of Engineering and Technology in Guna, India is a reputable engineering university that offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines."
       />
          <ResumeCard
            title="Btech Computer Science"
            subTitle="JUET"
            result="7.2/10"
            des="Jaypee University of Engineering and Technology in Guna, India is a reputable engineering university that offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines."
        />
        </div>
      </div>
    </motion.div>
  );
}

export default Education