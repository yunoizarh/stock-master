import SideBar from "../components/SideBar";
import { Search, Plus, Minus } from "lucide-react";
import { useProductsContext } from "../context/ProductsContext";
import cocacola from "../assets/cocacola-image.jpeg";
import { useState } from "react";
import OrderDetails from "../components/OrderDetails";

const PointOfSalesPage = () => {
  const { products } = useProductsContext();
  const [selectedProducts, setSelectedProducts] = useState([]);

  const getQuantity = (id) => {
    const item = selectedProducts.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  const increment = (product) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      const { id, name, sales_price } = product;
      return [...prev, { id, name, sales_price, quantity: 1 }];
    });
  };

  const decrement = (product) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (!existingProduct) return prev;
      if (existingProduct.quantity === 1) {
        return prev.filter((p) => p.id !== product.id);
      }

      return prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });
  };
  return (
    <section className="md:flex h-screen bg-[#f2f2f2]">
      <SideBar />

      <section className="md:flex flex-1 block">
        {/* Main Orders Section */}
        <div className="flex flex-col flex-1 py-3 px-2 overflow-hidden ">
          <div className="bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 rounded-md p-4">
            <h2 className="font-bold text-lg sm:text-2xl">
              Point of Sales (POS)
            </h2>

            <div className="relative w-full sm:w-auto">
              <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <main className="bg-white flex flex-col flex-1 my-1 p-4 rounded-md shadow-sm overflow-hidden ">
            <div className="flex justify-between items-center flex-shrink-0 mb-3">
              <div>
                <h2 className="font-bold md:text-xl my-2">All Products</h2>
                <p className="md:text-sm text-xs">
                  View and manage all customer orders
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto pr-2 md:max-h-full max-h-[400px]">
              {products.map((product, i) => {
                const qty = getQuantity(product.id);
                return (
                  <div
                    key={i}
                    className="bg-gray-100 p-1 rounded-lg shadow-sm space-y-4"
                  >
                    <div className=" w-full h-[140px]">
                      <img
                        src={cocacola}
                        alt=""
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity Left : {product.stock_quantity}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <p className=" text-xl">₦ {product.sales_price}</p>
                        <div className="bg-gray-200 rounded-2xl p-1 flex items-center gap-3 ml-auto">
                          {qty > 0 && (
                            <>
                              <button
                                className="flex items-center justify-center bg-gray-300 rounded-full hover:bg-green-600 transition p-1"
                                onClick={() => decrement(product)}
                              >
                                <Minus className="h-5 w-5" />
                              </button>

                              <p className="font-medium">{qty}</p>
                            </>
                          )}

                          <button
                            className="flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition p-1"
                            onClick={() => increment(product)}
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>

        <OrderDetails selectedProducts={selectedProducts} />
      </section>
    </section>
  );
};

export default PointOfSalesPage;
