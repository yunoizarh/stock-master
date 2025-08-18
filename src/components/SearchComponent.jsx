import { Search } from "lucide-react";
import { useProductsContext } from "../context/ProductsContext";

const SearchComponent = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <>
      <div className="relative w-full sm:w-auto md:w-auto">
        <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
          <Search className="h-5 w-5" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full sm:w-64 lg:w-80 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default SearchComponent;
