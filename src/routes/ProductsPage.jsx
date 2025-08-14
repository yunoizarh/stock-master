import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ProductsView from "../components/ProductsView";
import supabase from "../supabase-client";
import { useEffect, useState } from "react";
import AddProducts from "../components/AddProducts";
import { useProductsContext } from "../context/ProductsContext";

const ProductsPage = () => {
  const { products } = useProductsContext();

  useEffect(() => {
    const channel = supabase
      .channel("products-modification")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (payload) => {
          console.log("changes received :", payload);

          //Handle the logics , insert
          if (payload.eventType === "INSERT") {
            setProducts((prev) => [...prev, payload.new]);
          }

          //update
          //delete
        }
      )
      .subscribe();

    //cleanup when component unmounts
    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <section className="md:flex h-screen bg-[#f2f2f2]">
      <SideBar />

      <section className="flex flex-col h-screen py-3 mx-[2%] md:mx-2 overflow-hidden">
        <Header className="flex-shrink-0" />

        <main className="bg-white flex flex-col flex-1 my-1 p-4 rounded-md shadow-sm overflow-hidden ">
          <div className="flex justify-between items-center flex-shrink-0 ">
            <div>
              <h2 className="font-bold md:text-2xl my-2">
                Products management
              </h2>
              <p className="md:text-sm text-xs">
                Add new products to your store
              </p>
            </div>
            <AddProducts products={products} />
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-auto md:overflow-x-hidden w-full">
            <ProductsView allProducts={products} />
          </div>
        </main>
      </section>
    </section>
  );
};

export default ProductsPage;
