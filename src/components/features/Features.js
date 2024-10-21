import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Strategy"
          des="Crafting data-driven strategies that enhance operational efficiency and drive sustainable growth for businesses."
        />
        <Card
          title="App Development"
          des="Building user-centric mobile applications with a focus on performance, scalability, and a seamless experience."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="Optimizing websites to improve visibility, enhance search engine rankings, and attract quality traffic."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Creating robust and intuitive mobile solutions tailored to meet evolving business and consumer needs."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Designing user experiences that are both intuitive and engaging, ensuring a user-friendly interface for all platforms."
          icon={<SiAntdesign />}
        />
        <Card
          title="Web Hosting"
          des="Providing secure and reliable web hosting services to keep your websites running smoothly 24/7."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features
