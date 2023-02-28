import React from "react";

const HardWorkCard = (props) => {
    return(
        <div className="my-16  flex flex-col  items-center">
            <img className="w-40" src={props.img} alt={props.alt}/>
            <p className="text-4xl font-semibold mt-5">{props.count}</p>
            <p className="text-3xl font-semibold text-[#7580A1] mt-5">{props.discription}</p>
        </div>
    );
};

export default HardWorkCard;