import React, { useContext } from 'react'
import { ContextProvider } from '../Context/Store'
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Content from '../components/Category/Content';
import { ThemeContext } from '../Context/themeContext';

const Categories = () => {
  const {isLoading} = useContext(ContextProvider);
  const {theme} = useContext(ThemeContext);

  return isLoading ? (<Loading/>): (<main className={`${theme?'dark':''} flex flex-wrap`}>
    <Navbar/>
    <Content/>
  </main>)
}

export default Categories