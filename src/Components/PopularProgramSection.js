import React from "react";
import javaImg from "../assets/images/javaBatch.jpg";
import javascriptImg from "../assets/images/javascriptBatch.jpg";
import dataImg from "../assets/images/DataBatch.jpg";
import PopularProgramCard from "./PopularProgramCard";

const PopularPrograms = () => {
  return (
    <div>
      <p className="text-5xl text-[#5A4BDA] font-bold text-center mb-4">
        Popular Programs
      </p>
      <p className="text-center text-[#758283] text-lg mb-16">
        Most in demand and watched by people.
      </p>

      <div className="flex items-center justify-center mb-24 mx-32">
        <PopularProgramCard
          img={javaImg}
          alt="javaImg"
          heading="Java with DSA and System Design"
          teacherName="Priya Bhatia"
          price="2975.0"
        />

        <PopularProgramCard
          img={javascriptImg}
          alt="javascriptImg"
          heading="Full Stack Web Developer"
          teacherName="Hitesh Choudhary"
          price="2975.0"
        />

        <PopularProgramCard
          img={dataImg}
          alt="dataScience"
          heading="Data Science Master"
          teacherName="Krish Naik"
          price="2975.0"
        />
      </div>

      <p className="text-center text-xl text-[#758283] font-semibold mb-16">View More</p>
    </div>
  );
};

export default PopularPrograms;
