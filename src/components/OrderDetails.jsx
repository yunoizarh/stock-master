import cocacola from "../assets/cocacola-image.jpeg";
import { TrashIcon } from "lucide-react";
const OrderDetails = ({ selectedProducts }) => {
  return (
    <>
      <aside className="w-full md:w-72 bg-white border-l  overflow-y-auto flex flex-col">
        <div className="p-3 ">
          <h2 className="font-bold text-lg mb-2">Order Details</h2>
          <p className="text-gray-600 text-sm">
            Select an order to view its details here.
          </p>
          <div className="flex items-center gap-2">
            <p>Date</p>
            <p>Time</p>
          </div>
          <div className="max-h-[250px] overflow-y-scroll">
            {selectedProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 py-2 "
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={cocacola}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col flex-grow space-y-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold">
                      ₦ {item.sales_price}
                    </p>
                    <span className="text-sm">x {item.quantity}</span>
                  </div>
                </div>

                <button className=" text-red-500 hover:text-red-700 border rounded-md p-1">
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-gray-100 rounded-tl-2xl p-3 shadow-md mt-auto">
          <h3 className="text-lg font-semibold my-1">Payment Summary</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-xs">Subtotal</p>
            <span className="font-semibold">sub</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-500 text-xs">Tax 10%</p>
            <span className="font-semibold">tax</span>
          </div>
          <div className="border-t-2 flex justify-between items-center pt-2">
            <h3 className="font-semibold">Total</h3>
            <span className="font-semibold">tt</span>
          </div>
          <button className="bg-green-500 text-white text-sm font-semibold rounded-md p-3 w-full mt-8">
            Proceed Payment
          </button>
        </div>
      </aside>
    </>
  );
};

export default OrderDetails;
