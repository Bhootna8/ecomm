import React, { useContext } from "react";
import { ContextProvider } from "../Context/Store";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Home/Content";
import { ThemeContext } from "../Context/themeContext";

const Search = () => {
  const { isLoading } = useContext(ContextProvider);
  const { theme } = useContext(ThemeContext);

  return isLoading ? (
    <Loading />
  ) : (
    <main className={` ${theme ? "dark" : ""} flex flex-wrap gap-5`}>
      <Navbar />
      <Content/>
      <Footer />
    </main>
  );
};

export default Search;
