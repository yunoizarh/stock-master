//random json data
[
  {
    id: 1,
    name: "Coca Cola 50cl",
    category: "Beverages",
    price: 250,
    costPrice: 180,
    stock: 45,
    unit: "bottle",
    dateAdded: "2025-08-01",
  },
  {
    id: 2,
    name: "Pepsi 50cl",
    category: "Beverages",
    price: 240,
    costPrice: 170,
    stock: 38,
    unit: "bottle",
    dateAdded: "2025-07-30",
  },
  {
    id: 3,
    name: "Indomie Regular Pack",
    category: "Foodstuff",
    price: 200,
    costPrice: 150,
    stock: 120,
    unit: "pack",
    dateAdded: "2025-08-03",
  },
  {
    id: 4,
    name: "Golden Morn 500g",
    category: "Cereals",
    price: 1200,
    costPrice: 950,
    stock: 25,
    unit: "pack",
    dateAdded: "2025-08-05",
  },
  {
    id: 5,
    name: "Dano Milk 400g",
    category: "Dairy",
    price: 1700,
    costPrice: 1400,
    stock: 32,
    unit: "tin",
    dateAdded: "2025-07-28",
  },
  {
    id: 6,
    name: "Pure Bliss Biscuit",
    category: "Snacks",
    price: 250,
    costPrice: 200,
    stock: 60,
    unit: "pack",
    dateAdded: "2025-08-04",
  },
  {
    id: 7,
    name: "Sunlight Detergent 1kg",
    category: "Toiletries",
    price: 850,
    costPrice: 680,
    stock: 40,
    unit: "pack",
    dateAdded: "2025-08-06",
  },
  {
    id: 8,
    name: "Hypo Bleach Sachet",
    category: "Cleaning",
    price: 100,
    costPrice: 70,
    stock: 95,
    unit: "sachet",
    dateAdded: "2025-08-02",
  },
  {
    id: 9,
    name: "Spaghetti Dangote 500g",
    category: "Foodstuff",
    price: 450,
    costPrice: 370,
    stock: 52,
    unit: "pack",
    dateAdded: "2025-08-05",
  },
  {
    id: 10,
    name: "Power Oil 1L",
    category: "Oil & Seasoning",
    price: 1800,
    costPrice: 1500,
    stock: 18,
    unit: "bottle",
    dateAdded: "2025-07-31",
  },
  {
    id: 11,
    name: "Knorr Cubes (8pcs)",
    category: "Oil & Seasoning",
    price: 300,
    costPrice: 250,
    stock: 70,
    unit: "pack",
    dateAdded: "2025-08-06",
  },
  {
    id: 12,
    name: "Milo Refill 500g",
    category: "Beverages",
    price: 1800,
    costPrice: 1550,
    stock: 22,
    unit: "pack",
    dateAdded: "2025-07-27",
  },
  {
    id: 13,
    name: "Tissue Roll (4 in 1)",
    category: "Toiletries",
    price: 900,
    costPrice: 720,
    stock: 35,
    unit: "pack",
    dateAdded: "2025-08-01",
  },
  {
    id: 14,
    name: "Eva Water 75cl",
    category: "Beverages",
    price: 150,
    costPrice: 100,
    stock: 110,
    unit: "bottle",
    dateAdded: "2025-07-30",
  },
  {
    id: 15,
    name: "Hollandia Yoghurt 1L",
    category: "Dairy",
    price: 1200,
    costPrice: 950,
    stock: 20,
    unit: "pack",
    dateAdded: "2025-08-03",
  },
  {
    id: 16,
    name: "Custard 500g",
    category: "Cereals",
    price: 1000,
    costPrice: 800,
    stock: 28,
    unit: "tin",
    dateAdded: "2025-08-04",
  },
  {
    id: 17,
    name: "Gala Sausage Roll",
    category: "Snacks",
    price: 150,
    costPrice: 120,
    stock: 75,
    unit: "roll",
    dateAdded: "2025-08-06",
  },
  {
    id: 18,
    name: "JIK Bleach 500ml",
    category: "Cleaning",
    price: 800,
    costPrice: 650,
    stock: 27,
    unit: "bottle",
    dateAdded: "2025-08-02",
  },
  {
    id: 19,
    name: "Bournvita Refill 500g",
    category: "Beverages",
    price: 1750,
    costPrice: 1450,
    stock: 21,
    unit: "pack",
    dateAdded: "2025-07-29",
  },
  {
    id: 20,
    name: "Closeup Toothpaste 140g",
    category: "Toiletries",
    price: 600,
    costPrice: 480,
    stock: 33,
    unit: "tube",
    dateAdded: "2025-08-01",
  },
];

import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./service/ProductService";

export default function BasicDemo() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" rounded />
            <Button icon="pi pi-star-fill" rounded severity="success" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card space-x-2">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
