import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

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
          <p className="text-sm text-designColor tracking-[4px]">2012-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">IT specialized school No 171</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="High school with major of CS"
            subTitle="MAFIFIDUM"
            result="GPA: 3.90/4"
            des="Fundamental basis and knowledges were examined and observed."
          />
                <ResumeCard
            title="Brunel Pathway College"
            subTitle="Foundation year with future progressing to university"
            result="GPA: 4.5/5"
            des="This stage covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Brunel University London"
            subTitle="BSc(Hons) Computer Science AI"
            result="GPA: 4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
    
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Junior developer"
            subTitle="NAPA team - (2021-2022)"
            result="Uzbekistan"
            des="First projects and OOP based developments are crucial in my journey. In a year period new skills were obtained."
          />
          <ResumeCard
            title="The head of Youth Affairs"
            subTitle="O'ZLiDeP - (2022 - 2023)"
            result="Uzbekistan"
            des="A popular destination with a growing number of highly qualified homegrown undergraduates, it's true that securing a role in that position wasn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Startdev_ - (2022 - now)/ evolut.uz - (2022 - now)"
            result="Uzbekistan"
            des="Most successfull projects in last 5 years in Uzbekistan. Providing lifelong IT solutions for future industry development"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
