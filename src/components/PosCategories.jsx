import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { useProductsContext } from "../context/ProductsContext";

const PosCategories = ({ selectedCategory, setSelectedCategory, products }) => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const categories = [
    { label: "All", value: "All" },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      label: cat,
      value: cat,
    })),
  ];
  const categoryTemplate = (category) => {
    const isSelected = category.value === selectedCategory;
    return (
      <div
        className={`text-center py-2 px-1 border rounded-xl mx-1 cursor-pointer transition-all duration-200 ${
          isSelected
            ? " text-white border-blue-500 shadow-md hover:bg-blue-100"
            : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
        }`}
        onClick={() => setSelectedCategory(category.value)}
      >
        <p className="capitalize text-gray-600 font-semibold">
          {category.label}
        </p>
        <p className="text-xs text-gray-500 mt-1">10 items</p>
      </div>
    );
  };

  return (
    <div className="card ">
      <h2 className="text-lg font-semibold mb-1">Categories</h2>
      <Carousel
        value={categories}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={categoryTemplate}
        showIndicators
      />
    </div>
  );
};

export default PosCategories;
