import React from "react";
import redBus from '../assets/images/redbus.png';
import wipro from '../assets/images/wipro.png';
import oracle from '../assets/images/oracle.png';
import kpmg from '../assets/images/kpmg.png';
import ms100 from '../assets/images/ms100.png';

const Achivers = () =>{
    return(
        <div className="bg-[#EAECEF]">
            <p className="text-5xl text-[#5A4BDA] font-semibold text-center pt-14">Our Achiever's Work with</p>

            <div className="flex justify-evenly items-center py-28">
            <img className="w-[30%]" src={wipro} alt='wipro'/>
            <img className="w-[30%]" src={redBus} alt='redBus'/>
            <img className="w-[30%]" src={oracle} alt='oracle'/>
            <img className="w-[30%]" src={kpmg} alt='kpmg'/>
            <img className="w-[30%]" src={ms100} alt='ms100'/>

            </div>
        </div>
    );
};

export default Achivers;