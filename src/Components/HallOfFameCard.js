import React from "react";

const HallOfFameCard = (props) =>{
    return(
        <div className="shadow-2xl rounded-lg flex flex-col items-center justify-center p-10 w-[400px] ">
            <img className="rounded-full w-[30%] mt-9 mb-4" src={props.img} alt={props.alt}/>
            <p className="text-xl font-bold">{props.name}</p>
            <p className="text-md text-[#758283] my-4">{props.designation}</p>
            <p className="text-center">{props.description}</p>
        </div>
    );
};

export default HallOfFameCard;