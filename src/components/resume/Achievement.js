import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python with Pandas"
            subTitle="Certificated by 'Datacamp'"
            result="2024"
            des="DataCamp’s Python with Pandas certification program is designed for learners to develop and enhance their data manipulation and analysis skills using the Pandas library in Python. This program caters to both beginners and those with some coding experience, providing a comprehensive introduction to working with data.

"
          />
          <ResumeCard
            title="Python. OOP"
            subTitle="Certificated by 'Datacamp'"
            result="2024"
            des="DataCamp’s Python OOP certification program is designed for learners to build and strengthen their skills in Object-Oriented Programming, whether they're beginners or have prior coding experience. The program covers core OOP principles in Python, starting with the basics of classes, objects, attributes, and methods. As learners advance, they delve into more complex topics like encapsulation, inheritance, and polymorphism to develop modular and reusable code."
          />
          <ResumeCard
            title="Python Bootcamp"
            subTitle="Certified by 'Bootcamp' "
            result="2022"
            des="DataCamp’s Python bootcamp is designed for learners to build and enhance their Python programming skills, whether they're beginners or more advanced users. The bootcamp covers core Python programming principles, starting with basic syntax, variables, data types, and control flow (loops and conditionals)."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Achievement;
