import React from "react";
import Card from "./ProductCard";
import lab from "../assets/images/neurolab-icon.svg";
import jobportal from "../assets/images/jobPortal-icon.svg";
import internship from "../assets/images/Internship-icon.svg";
import halloffame from "../assets/images/halloffame-icon.svg";
import affilitatePortal from "../assets/images/affilitatePortal-icon.svg";

const Product = () => {
  return (
    <div>
      <p className="text-center text-5xl font-bold text-[#5A4BDA] mb-16">
        Our Products
      </p>
      <div className="flex justify-center items-center mx-28">
        <Card
          img={lab}
          alt="lab img"
          count="PW Skills Lab"
          discription="Supercharge your project development with our robust lab."
        />

        <Card
          img={jobportal}
          alt="jobportal img"
          count="Job Portal"
          discription="Use exceptional templates for a stand-out resume minus the sign up process."
        />

        <Card
          img={internship}
          alt="internship"
          count="Experience Portal"
          discription="PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects."
        />
      </div>

      <div className="flex justify-center items-center mx-48 mb-24">
        <Card
          img={halloffame}
          alt="halloffame img"
          count="Hall of Fame"
          discription="Our student placements and 100K+ career transitions speak volumes about our courses."
        />

        <Card
          img={affilitatePortal}
          alt="affilitatePortal"
          count="Become an affilitate"
          discription="Explore affiliate marketing opportunities with PW Skills and attain financial freedom."
        />
      </div>
    </div>
  );
};

export default Product;
