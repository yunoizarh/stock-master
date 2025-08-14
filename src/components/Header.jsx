import { Bell, Search, Share2 } from "lucide-react";

const Header = () => {
  return (
    <header className="md:flex items-center justify-between md:px-4 px-3 py-1 space-y-3 rounded-md shadow-sm bg-white">
      <h2 className="font-bold text-2xl ">Stock Master</h2>
      <div className="flex items-center gap-2 flex-1 max-w-lg md:mx-6">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
            <Search className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-sm">
            ⌘K
          </span> */}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-700" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </div>

        <Share2 className="h-6 w-6 text-gray-700" />

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div>
            {" "}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="title ">
            <h2 className=" font-semibold">Hello Maimunah</h2>
            <p className="text-xs font-semibold">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
