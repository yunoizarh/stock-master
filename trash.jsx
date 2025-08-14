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

import SideBar from "../components/SideBar";
import { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
const PointOfSalesPage = () => {
  const products = [
    {
      id: 1,
      name: "Smash Beef Burger",
      desc: "Double patty, cheese, toasted bun",
      price: 38000,
      image: "/images/smash-beef-burger.jpg",
    },
    {
      id: 2,
      name: "Spicy Chicken Burger",
      desc: "Crispy chicken, spicy mayo sauce",
      price: 37000,
      image: "/images/spicy-chicken-burger.jpg",
    },
    {
      id: 3,
      name: "Egg Mayo Burger",
      desc: "Soft egg, creamy mayo, bun",
      price: 32000,
      image: "/images/egg-mayo-burger.jpg",
    },
    // ... add the rest
  ];
  return (
    <>
      <section className="md:flex flex-col h-screen bg-[#f2f2f2]">
        <div className="flex min-h-screen">
          <SideBar />

          {/* Main content */}
          <div className="flex-1 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold">Menu</h1>
              <input
                type="text"
                placeholder="Search products by name or type"
                className="border rounded-md px-3 py-2 w-80"
              />
            </div>
            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              {[
                "All Menu",
                "Favorites",
                "Burgers",
                "Sandwich",
                "Snacks",
                "Vegetarian",
                "Drinks",
                "Dessert",
              ].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200"
                >
                  {tab}
                </button>
              ))}
            </div>{" "}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <Card key={product.id} className="flex flex-col">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-t-xl"
                  />
                  <div className="flex flex-col flex-1">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-500 flex-1">
                      {product.desc}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium">
                        Rp {product.price.toLocaleString()}
                      </span>
                      <Button size="sm" onClick={() => addToOrder(product)}>
                        +
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="w-80 bg-white border-l p-4">
            <h2 className="font-semibold mb-4">Order Details</h2>
            <div className="space-y-2"></div>
            <div className="mt-4 border-t pt-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span> ₦ </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span> ₦ </span>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <span>Total</span>
                <span> ₦ </span>
              </div>
            </div>
            <Button className="w-full mt-4">Proceed Payment</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PointOfSalesPage;

// export default function OrdersPage() {
//   const [orderItems, setOrderItems] = useState([]);

//   const addToOrder = (product) => {
//     setOrderItems((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const subtotal = orderItems.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );
//   const tax = subtotal * 0.1;

//   return (

//   );
// }
