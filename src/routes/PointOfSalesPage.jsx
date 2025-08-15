import SideBar from "../components/SideBar";
import { Search, Plus, Minus } from "lucide-react";
import { useProductsContext } from "../context/ProductsContext";
import cocacola from "../assets/cocacola-image.jpeg";
import { useState } from "react";
import OrderDetails from "../components/OrderDetails";
import PosCategories from "../components/PosCategories";
import PosSearch from "../components/PosSearch";

const PointOfSalesPage = () => {
  const { products } = useProductsContext();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="md:flex h-screen bg-[#f2f2f2]">
      <SideBar />

      <section className="md:flex flex-1 block">
        {/* Main Orders Section */}
        <div className="flex flex-col flex-1 py-3 px-2 overflow-hidden ">
          <div className="bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 rounded-md p-3">
            <div>
              <h2 className="font-bold md:text-2xl my-2">All Products</h2>
              <p className="md:text-sm text-xs">
                View and manage all customer orders
              </p>
            </div>

            <PosSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <main className="bg-white flex flex-col flex-1 my-1 p-4 rounded-md shadow-sm overflow-hidden ">
            <PosCategories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              products={products}
            />
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto pr-2 md:max-h-full max-h-[400px]">
                {filteredProducts.map((product, i) => {
                  const qty = getQuantity(product.id);
                  return (
                    <div
                      key={i}
                      className="bg-gray-100 p-1 rounded-lg shadow-sm space-y-4 max-h-[270px]"
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
            ) : (
              <p className="flex justify-center items-center text-lg">
                Loading....
              </p>
            )}
          </main>
        </div>

        <OrderDetails selectedProducts={selectedProducts} />
      </section>
    </section>
  );
};

export default PointOfSalesPage;
