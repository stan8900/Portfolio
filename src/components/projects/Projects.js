import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My personal starred projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Simple AI"
          des="This is a simple AI chatbot project created using Python. The chatbot can respond to user queries based on a predefined dataset using Natural Language Processing (NLP) techniques.

        "
          src={projectOne}
        />
        <ProjectsCard
          title="Erase-2-Good"
          des=" Erase-2-Good is a Python-based tool for removing unwanted objects from images using advanced inpainting techniques. The tool leverages the LaMa (Large Mask Inpainting) deep learning model to fill in the gaps left by removed objects, resulting in natural-looking images."
          src={projectTwo}
        />
        <ProjectsCard
          title="Futuri"
          des=" FUTURI - Predict Your Future Child's Appearance FUTURI is a simple Python application that allows you to predict what your future child might look like by blending the facial features of two parent images."
          src={projectThree}
        />
       
        
      </div>
    </section>
  );
}

export default Projects