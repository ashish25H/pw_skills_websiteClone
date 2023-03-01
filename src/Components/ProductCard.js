import React from "react";

const ProductCard = (props) => {
    return(
        <div className="my-16  flex flex-col  items-center ml-8 mr-8">
            <img className="w-[250px] h-[200px]" src={props.img} alt={props.alt}/>
            <p className="text-3xl font-semibold mt-5">{props.count}</p>
            <p className="text-lg font-normal text-[#878787] mt-5 text-center">{props.discription}</p>
        </div>
    );
};

export default ProductCard;