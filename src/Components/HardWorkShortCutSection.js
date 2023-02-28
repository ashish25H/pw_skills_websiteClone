import React from "react";
import HardWorkCard from "./HardWorkCard";
import cardImg from "../assets/images/credit-card-icon.svg";
import studentImg from "../assets/images/student-icon.svg";
import bookImg from "../assets/images/books-icon.svg";

const HardWork = () => {
  return (
    <>
      <h1 className="mt-14 text-5xl text-center font-semibold text-[#5A4BDA]">
        "Pure Hardwork, No Shortcuts!"
      </h1>
      <div className="border-t-4 w-36 border-[#EAAA2E] mx-auto mt-3"></div>
      <div className="flex justify-evenly items-center">
        <HardWorkCard
          img={bookImg}
          alt={"book img"}
          count="600+"
          discription="Different Courses"
        />
        <HardWorkCard
          img={studentImg}
          alt={"studentImg"}
          count="700000+"
          discription="Students Enrolled"
        />
        <HardWorkCard
          img={cardImg}
          alt={"cardImg"}
          count="10000+"
          discription="Successful Transition"
        />
      </div>
    </>
  );
};

export default HardWork;
