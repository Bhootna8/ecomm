import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Herobar from "../components/Herobar";
import Content from "../components/Home/Content";
import Footer from "../components/Footer";
import { ThemeContext } from "../Context/themeContext";
import { ContextProvider } from "../Context/Store";
import Loading from "../components/Loading";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(ContextProvider);

  console.log(theme);
  return isLoading ? (
    <Loading />
  ) : (
    <main className={`${theme ? "dark" : ""} flex flex-wrap gap-5 `}>
      <Navbar />
      <Herobar />
      <Content />
      <Footer />
    </main>
  );
};

export default Home;
