import React, { useActionState, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { AutoComplete } from "primereact/autocomplete";

import supabase from "../supabase-client";

const AddProducts = ({ products }) => {
  const [visible, setVisible] = useState(false);
  const [categorySuggestion, setCategorySelection] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  //  new Set()---function is used to filter out duplicates
  const allCategories = [...new Set(products?.map((p) => p.category))];

  const searchCategory = (event) => {
    const query = event.query.toLowerCase();
    const filtered = allCategories.filter((cat) =>
      cat.toLowerCase().includes(query)
    );
    setCategorySelection(filtered);
  };

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = formData.get("name");
      const costPrice = formData.get("cost-price");
      const salesPrice = formData.get("sales-price");
      const stockQuantity = formData.get("stock-quantity");
      const reorderThreshold = formData.get("reorder-threshold");
      const Category = formData.get("Category");

      const insertData = {
        name: name,
        sales_price: salesPrice,
        cost_price: costPrice,
        stock_quantity: stockQuantity,
        reorder_threshold: reorderThreshold,
        category: Category,
      };

      const { error } = await supabase.from("products").insert(insertData);

      if (error) {
        console.error("supabase insert error :", error.message);
        return new Error("failed to add product");
      }

      setVisible(false);
    },
    null
  );
  return (
    <>
      <div>
        <button
          className="bg-gray-700 text-gray-200 md:text-lg py-2 px-3 md:px-5 rounded-md"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add Product
        </button>
        <Dialog
          header="Add New Products to your Store"
          visible={visible}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          style={{ width: "50vw", height: "70vh" }}
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
          <form action={submitAction} className="mt-8">
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-0 md:gap-x-10">
              <FloatLabel>
                <InputText
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  required
                  className="w-full p-2 text-lg border-2 "
                />
                <label htmlFor="name" className="text-base -mt-4">
                  Product Title
                </label>
              </FloatLabel>
              <FloatLabel>
                <InputText
                  id="cost-price"
                  name="cost-price"
                  type="number"
                  required
                  defaultValue={0}
                  min="0"
                  step="10"
                  className="w-full p-2 text-lg border-2"
                />
                <label htmlFor="cost-price" className="text-base -mt-4">
                  ₦ Cost Price
                </label>
              </FloatLabel>
              <FloatLabel>
                <InputText
                  id="sales price"
                  name="sales-price"
                  type="number"
                  defaultValue={0}
                  required
                  min="0"
                  step="10"
                  variant="filled"
                  className="w-full p-2 text-lg border-2 "
                />
                <label htmlFor="sales price" className="text-base -mt-4">
                  ₦ Sales Price
                </label>
              </FloatLabel>
              <FloatLabel>
                <InputText
                  id="stock quantity"
                  name="stock-quantity"
                  variant="filled"
                  type="number"
                  required
                  defaultValue={0}
                  min="0"
                  className="w-full p-2 text-lg border-2 "
                />
                <label htmlFor="stock quantity" className="text-base -mt-4">
                  Stock Quantity
                </label>
              </FloatLabel>
              <FloatLabel>
                <InputText
                  id="Re-order Threshold"
                  name="reorder-threshold"
                  type="number"
                  variant="filled"
                  required
                  defaultValue={0}
                  min="0"
                  step="10"
                  tooltip="Notify Reorder when stock falls below this value."
                  tooltipOptions={{ position: "top" }}
                  className="w-full p-2 text-lg border-2 "
                />
                <label htmlFor="Re-order Threshold" className="text-base -mt-4">
                  Re-order Threshold
                </label>
              </FloatLabel>
              <FloatLabel>
                <AutoComplete
                  id="Category"
                  name="Category"
                  type="text"
                  variant="filled"
                  value={selectedCategory}
                  suggestions={categorySuggestion}
                  completeMethod={searchCategory}
                  onChange={(e) => setSelectedCategory(e.value)}
                  className="w-full "
                  inputClassName="p-2 text-lg border-2 w-full"
                />

                <label htmlFor="Category" className="text-base -mt-4">
                  Category
                </label>
              </FloatLabel>
            </div>
            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                disabled={isPending}
                className=" bg-gray-700 text-gray-200 md:text-lg py-2 px-10 md:px-20 rounded-md"
              >
                {isPending ? "Adding Products...." : "Add Product"}
              </button>
            </div>
          </form>
        </Dialog>
      </div>
    </>
  );
};

export default AddProducts;
