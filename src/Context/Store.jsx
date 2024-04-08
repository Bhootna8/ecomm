import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Wishlist from "../pages/wishlist";

export const ContextProvider = createContext();
const baseUrl = "https://dummyjson.com/products";

const Store = ({ children }) => {
  const location = useLocation();
  const defaultTerm = useEffect(() => {
    if(!products) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    if(!location.search) {
      setUrlTerm(location.pathname)
    }else {
      setUrlTerm(location.pathname+location.search)
    }
  }, [location.pathname]);

  const [products, setProducts] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  const [urlTerm, setUrlTerm] = useState(defaultTerm);
  const [isLoading, setLoading] = useState(true);
  const [noOfLikedProducts, setNoOfLikedProducts]= useState(0)

  useEffect(() => {
    if (urlTerm === undefined || urlTerm === null || urlTerm==="/wishlist" || urlTerm==="/profile" || urlTerm==="/login" || urlTerm==="/register") return;
      axios
        .get(`${baseUrl}${urlTerm}`, {
          params: {
            limit: 24,
          },
        })
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          urlTerm==='/' || urlTerm?.startsWith('/search') ? setProducts(res.data?.products): setCategories(res.data)
        })
        .catch((err) => console.log(err));
  }, [urlTerm]);

  return (
    <ContextProvider.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setLoading,
        setUrlTerm,
        urlTerm,
        categories,
        setNoOfLikedProducts,
        noOfLikedProducts
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Store;
