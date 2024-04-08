import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import links from "../constants/links";
import { ThemeContext } from "../Context/themeContext";
import { MdMenu } from "react-icons/md";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { ContextProvider } from "../Context/Store";

const Navbar = () => {
  const path = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const { setUrlTerm, noOfLikedProducts } = useContext(ContextProvider);
  console.log(theme);

  const search = (e)=> {
    if(e.key==="Enter") {
      console.log("search")
      window.location.href="/search?q="+e.target.value;
    }
  }

  return (
    <nav
      className={`flex w-full items-center dark:bg-black bg-white h-[80px] px-10 shadow-md`}
    >
      <h1 className=" text-[1.8rem] font-bold">GoTrend</h1>

      <input type="text" onKeyUp={(e)=> search(e)} className=" flex w-[400px] h-[40px] text-xl font-medium px-3 border-2 ml-auto rounded-md outline-none border-[silver]" />

      <div className=" items-center gap-5 ml-auto mr-10 sm:flex hidden">
        {links.map((link, index) => (
          <Link
            onClick={() => {
              link.route === "/" || link.route === "/categories"
                ? setUrlTerm(link.route)
                : "";
            }}
            className={`${
              path.pathname === link.route
                ? "text-[#3fa6e5]"
                : ""
            } text-xl font-medium`}
            key={index}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <FaRegMoon
        size={28}
        color={"silver"}
        className={`${theme ? "flex" : "hidden"} font-bold cursor-pointer`}
        onClick={() => setTheme(!theme)}
      />
      <FaRegSun
        size={28}
        className={`${
          theme ? "hidden" : "flex"
        } font-bold cursor-pointer text-[#c6c63a]`}
        onClick={() => setTheme(!theme)}
      />
      <MdMenu size={20} className=" sm:hidden flex" />
    </nav>
  );
};

export default Navbar;
