import React from "react";

const Button = (props) => {
    return(
        <>
            <button className="bg-[#5A4BDA] text-[#fff] font-semibold px-5 m-3 rounded-md">{props.name}</button>
        </>
    )
}

export default Button;