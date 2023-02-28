import React from "react";
import PWSkillslogo from "../assets/images/PWSkills-logo.png";
import searchImg from "../assets/images/search-icon.svg";
import Button from "./Button";
import NavList from "./NavList";


const NavBar = () => {
  return (
    <>
      <nav className=" mt-[20px] flex justify-evenly item-center">
        <img className="w-44" src={PWSkillslogo} alt="logo" />

        <div className=" basis-2/4 flex justify-center items-center  border border-[#0D0D0D] rounded-lg m-2">
          <img className="w-6 h-fit  mr-3 ml-3" src={searchImg} alt="searchImg" />
          <input
          className="w-full h-fit outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="What do you want to learn?"
          />
        </div>

        <Button name='Login / Register'/>
      </nav>
      <NavList />
    </>
  );
};

export default NavBar;
