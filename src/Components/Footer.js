import React from "react";
import PWSkillslogo from "../assets/images/PWSkills-white.png";
import iso from "../assets/images/iso.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] p-20 text-[#fff] flex justify-evenly">
      <div>
        <img className="w-[36%]" src={PWSkillslogo} alt="logo" />
        <img src={iso} alt="iso img" className="mt-4 ml-9" />
      </div>


      <div>
        <p className="text-xl font-medium mb-3">PW Skills</p>
        <div className="border-t-2 border-[#EAAA2E] mb-3 w-32"></div>
        <div className="flex">
          <div>
            <ul className="font-medium mr-9">
              <li className="mb-2">About Us</li>
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Privacy policy</li>
            </ul>
          </div>
          <div>
            <ul className="font-medium">
              <li className="mb-2">Contact us</li>
              <li className="mb-2">Job assistance</li>
              <li className="mb-2">Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>

        <div>
            <p className="text-xl font-medium mb-3">Productos</p>
            <div className="border-t-2 border-[#EAAA2E] mb-3 w-32"></div>
            <div>
                <ul className="font-medium mr-9">
                    <li className="mb-2">PW Skills Lab</li>
                    <li className="mb-2">Job Portal</li>
                    <li className="mb-2">Experience portal</li>
                    <li className="mb-2">Become an affiliate</li>
                    <li className="mb-2">Hall of fame</li>
                </ul>
            </div>
        </div>

    </footer>
  );
};

export default Footer;
