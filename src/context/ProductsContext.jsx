import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase-client";

const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select();
      if (error) throw error;
      setProducts(data);
    } catch (error) {
      console.error("checking what's wrong...", error);
    }
  };
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
