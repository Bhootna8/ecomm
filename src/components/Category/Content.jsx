import React, { useContext } from "react";
import { ContextProvider } from "../../Context/Store";
import laptops from "../../assets/images/category/laptops.png";

const Content = () => {
  const { categories } = useContext(ContextProvider);
  console.log(categories);

  return (
    <section className=" flex flex-wrap items-center gap-20 py-10 justify-evenly h-full px-8">
      {categories?.map((category, index) => {
        return (
          <div key={index} className="flex flex-col items-center cursor-pointer">
            <div
              className=" relative flex-wrap h-[180px] rounded-full px-3 w-[180px] bg-[#0460743b] flex items-center"
            >
              <img
                src={laptops}
                className=" w-full left-0 h-full absolute"
                alt=""
              />
              {console.log(`../../assets/images/category/${category}.png`)}
            </div>
            <h1 className=" font-semibold text-xl font-serif cursor-pointer">{category}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Content;
