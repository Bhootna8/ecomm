import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Card = ({ product }) => {
    const [liked, setLiked] = useState(false);
  return (
    <div className=" card flex flex-col rounded-md w-[300px] h-fit">
      <div className=" w-full h-[250px] overflow-hidden rounded-tl-md rounded-tr-md">
        <img
          src={product.thumbnail}
          className=" w-full hover:scale-110 duration-200 transition-transform h-full inset-5"
          alt=""
        />
      </div>
      <h1 className=" px-2 text-xl font-semibold pt-1 flex items-center justify-between">
        {product.title}
        <FaHeart
          size={24}
          className={`${liked ? "flex" : "hidden"}`}
          onClick={() => setLiked(!liked)}
        />{" "}
        <FaRegHeart
          size={24}
          className={`${liked ? "hidden" : "flex"}`}
          onClick={() => setLiked(!liked)}
        />
      </h1>
      <h1 className=" indent-2 text-xl font-semibold pb-5">
        Rs.{product.price}
      </h1>
    </div>
  );
};

export default Card;
