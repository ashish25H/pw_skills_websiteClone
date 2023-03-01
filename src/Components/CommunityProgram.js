import React from "react";
import PopularProgramCard from "./PopularProgramCard";
import com1 from '../assets/images/community5.jpg';
import com2 from '../assets/images/community2.jpg';
import com4 from '../assets/images/community4.jpg';

const CommunityProgram = () => {
  return (
    <div>
      <p className="text-5xl text-[#5A4BDA] font-bold text-center mb-4">
      Community Programs
      </p>
      <p className="text-center text-[#758283] text-lg mb-16">
      Open to all pro-live classes on Youtube for free.
      </p>

      <div className="flex items-center justify-center mb-24 mx-32">
        <PopularProgramCard
          img={com1}
          alt="javaImg"
          heading="Stock Market Fundamentals"
          teacherName="Priya Bhatia"
          price="Free"
        />

        <PopularProgramCard
          img={com2}
          alt="javascriptImg"
          heading="Business Analytics Foundations"
          teacherName="Hitesh Choudhary"
          price="Free"
        />

        <PopularProgramCard
          img={com4}
          alt="dataScience"
          heading="C++ Fundamentals"
          teacherName="Gopal Sharma"
          price="Free"
        />
      </div>

      <p className="text-center text-xl text-[#758283] font-semibold mb-16">View More</p>
    </div>
  );
};

export default CommunityProgram;
